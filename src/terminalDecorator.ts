import { Injectable, Injector } from '@angular/core'
import { t } from './i18n'
import { Subscription } from 'rxjs'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ConfigService, LogService } from 'tabby-core'
import { TerminalDecorator, BaseTerminalTabComponent } from 'tabby-terminal'
import { QuickScript } from './configProvider'
import { ScriptEditModalComponent } from './scriptEditModal'
import { SftpUiService } from './sftp/sftp-ui.service'

import './quickScriptsBar.scss'

/** 系统监控采集命令：针对服务器环境优化的版本 */
const SYS_MONITOR_CMD = [
    '_S1=$(awk \'NR>2 && $1!~/lo:/ {r+=$2; t+=$10} END {print r, t}\' /proc/net/dev);',
    'sleep 1;',
    '_S2=$(awk \'NR>2 && $1!~/lo:/ {r+=$2; t+=$10} END {print r, t}\' /proc/net/dev);',
    '_CPU=$(top -bn1 | grep "Cpu(s)" | awk \'{print int($2+$4)}\');',
    '_MEM=$(awk \'/MemTotal/{t=$2} /MemAvailable/{a=$2} END{if(t>0) printf "%.0f", (t-a)/t*100; else print "0"}\' /proc/meminfo);',
    '_DISK=$(df -h / | awk \'NR==2 {print $5}\' | tr -d \'%\');',
    '_R1=$(echo $_S1 | awk \'{print $1}\'); _T1=$(echo $_S1 | awk \'{print $2}\');',
    '_R2=$(echo $_S2 | awk \'{print $1}\'); _T2=$(echo $_S2 | awk \'{print $2}\');',
    '_DL=$(echo "$_R2 $_R1" | awk \'{if($1>$2) printf "%.2f", ($1-$2)*8/1000000; else print "0.00"}\');',
    '_UL=$(echo "$_T2 $_T1" | awk \'{if($1>$2) printf "%.2f", ($1-$2)*8/1000000; else print "0.00"}\');',
    'echo "SYSMON:${_CPU}:${_MEM}:${_DISK}:${_UL}:${_DL}"',
].join(' ')

/** 监控状态上下文（每个 tab 独立） */
interface SysMonitorContext {
    timer: any
    element: HTMLElement
    running: boolean
    destroyed: boolean
}

@Injectable()
export class QuickScriptsDecorator extends TerminalDecorator {
    private logger: any

    constructor (
        private config: ConfigService,
        private injector: Injector,
        private sftpUi: SftpUiService,
    ) {
        super()
        this.logger = injector.get(LogService).create('quick-scripts')
    }

    attach (tab: BaseTerminalTabComponent): void {
        // 等待 tab 的 DOM 元素就绪后再注入按钮栏
        setTimeout(() => this.injectBar(tab), 200)
    }

    detach (_tab: BaseTerminalTabComponent): void {
        // 清理工作由 DOM 移除时自动完成
    }

    /**
     * 在终端 tab 的 DOM 中注入脚本按钮栏
     */
    private injectBar (tab: BaseTerminalTabComponent): void {
        const tabElement = (tab as any).element?.nativeElement
            || (tab as any).content?.nativeElement
            || document.querySelector('.tab-content .active')

        if (!tabElement) {
            return
        }

        // 查找终端内容容器（尝试多种可能的 DOM 结构）
        const terminalContainer = tabElement.querySelector('.content')
            || tabElement.querySelector('.terminal-container')
            || tabElement.querySelector('.xterm')
            || tabElement.firstElementChild

        if (!terminalContainer) {
            return
        }

        // 创建按钮栏容器
        const bar = document.createElement('div')
        bar.className = 'quick-scripts-bar'

        // 在终端内容前插入按钮栏
        terminalContainer.parentElement.insertBefore(bar, terminalContainer)

        // 渲染按钮
        this.renderButtons(bar, tab)

        // 启动系统监控
        const monitorCtx = this.startSysMonitor(bar, tab)

        // 监听配置变化，刷新按钮
        const sub = this.config.changed$.subscribe(() => {
            this.renderButtons(bar, tab)
        })

        // tab 销毁时清理
        tab.destroyed$.subscribe(() => {
            sub.unsubscribe()
            if (monitorCtx) {
                monitorCtx.destroyed = true
                this.stopSysMonitor(monitorCtx)
            }
            bar.remove()
        })
    }

    /**
     * 获取当前终端标签页的站点 Profile ID
     */
    private getProfileId (tab: any): string {
        return tab.profile?.id 
            || tab.profile?.name 
            || tab.customTitle 
            || tab.title 
            || 'global'
    }

    /**
     * 获取当前站点的专属脚本列表（带旧数据向前兼容）
     */
    private getScriptsForProfile (tab: any): QuickScript[] {
        const profileId = this.getProfileId(tab)
        const profileScripts = this.config.store.quickScriptsPlugin?.profileScripts || {}
        
        if (profileScripts[profileId]) {
            return profileScripts[profileId]
        }

        // 兼容：若 profile 没有配置过，但老全局 scripts 有配置，则继承老数据
        const legacy = this.config.store.quickScriptsPlugin?.scripts || []
        if (legacy.length > 0) {
            return legacy
        }

        return []
    }

    /**
     * 渲染按钮栏内容
     */
    private renderButtons (bar: HTMLElement, tab: BaseTerminalTabComponent): void {
        // 保存监控元素的引用（避免被 innerHTML 清空）
        const savedMonitor = bar.querySelector('.sys-monitor') as HTMLElement | null
        if (savedMonitor) {
            savedMonitor.remove()
        }
        bar.innerHTML = ''

        const scripts = this.getScriptsForProfile(tab)

        // 渲染每个脚本按钮
        for (const script of scripts) {
            const btn = document.createElement('button')
            btn.className = 'script-btn'
            btn.textContent = script.name
            btn.title = t('点击执行', 'Click to run') + `: ${script.commands.join(' → ')}`

            if (script.color) {
                btn.style.backgroundColor = script.color
                btn.style.color = '#fff'
                btn.style.borderColor = 'rgba(0, 0, 0, 0.2)'
            }

            // 左键点击 → 执行脚本
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.executeScript(tab, script, btn)
            })

            // 右键点击 → 编辑脚本
            btn.addEventListener('contextmenu', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.editScript(tab, script)
            })

            bar.appendChild(btn)
        }

        // 新建按钮 (+)
        const addBtn = document.createElement('button')
        addBtn.className = 'script-btn-add'
        addBtn.textContent = '+'
        addBtn.title = t('新建脚本', 'New Script')
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            this.addScript(tab)
        })
        bar.appendChild(addBtn)

        // 恢复被保存的系统监控元素（位于 + 按钮和 SFTP 按钮之间，靠右）
        if (savedMonitor) {
            bar.appendChild(savedMonitor)
        }

        // SFTP 按钮
        const sftpBtn = document.createElement('button')
        sftpBtn.className = 'script-btn sftp-btn'
        sftpBtn.style.backgroundColor = '#f1c40f' // 黄色背景
        sftpBtn.style.color = '#000' // 黑色文字，保证可读性
        sftpBtn.style.display = 'inline-flex'
        sftpBtn.style.alignItems = 'center'
        sftpBtn.style.fontWeight = 'bold'
        sftpBtn.style.borderColor = 'rgba(0, 0, 0, 0.2)'
        sftpBtn.title = t('打开 SFTP 文件传输', 'Open SFTP File Transfer')

        // 文件夹图标
        const icon = document.createElement('i')
        icon.className = 'fas fa-folder me-1'
        sftpBtn.appendChild(icon)

        // 文字
        const text = document.createTextNode(' sftp')
        sftpBtn.appendChild(text)

        sftpBtn.addEventListener('click', async (e) => {
            e.preventDefault()
            e.stopPropagation()

            const session = tab.session 
                || (tab as any).getActiveSession?.() 
                || (tab as any).getActivePane?.()?.session 
                || (tab as any).activePane?.session

            if (!session || typeof session.output$?.subscribe !== 'function') {
                this.sftpUi.openForSourceTab(tab)
                return
            }

            let capturedPath = ''
            let outputBuffer = ''
            
            const sub = session.output$.subscribe((data: string) => {
                outputBuffer += data
            })

            if (typeof (tab as any).sendInput === 'function') {
                (tab as any).sendInput('pwd\n')
            } else {
                session.write('pwd\r')
            }

            await new Promise(resolve => setTimeout(resolve, 400))
            sub.unsubscribe()

            const lines = outputBuffer.split(/[\r\n]+/)
            for (let i = lines.length - 1; i >= 0; i--) {
                const line = lines[i].trim()
                if (line.startsWith('/') && !line.includes(' ') && line.length > 1) {
                    if (line === 'pwd') {
                        continue
                    }
                    capturedPath = line
                    break
                }
            }

            this.sftpUi.openForSourceTab(tab, capturedPath)
        })

        bar.appendChild(sftpBtn)
    }


    /**
     * 执行脚本：按顺序逐条发送命令
     * 策略：发送命令后监听 output$，检测到提示符再发下一条，超时兜底
     */
    private async executeScript (
        tab: BaseTerminalTabComponent,
        script: QuickScript,
        btn: HTMLElement,
    ): Promise<void> {
        if (btn.classList.contains('running')) {
            return // 防止重复点击
        }

        // 尝试多渠道捕获当前活跃的会话
        const session = tab.session 
            || (tab as any).getActiveSession?.() 
            || (tab as any).getActivePane?.()?.session 
            || (tab as any).activePane?.session

        const hasSendInput = typeof (tab as any).sendInput === 'function'

        // 既无有效 session 也无法广播输入，则静默退出
        if (!session && !hasSendInput) {
            return
        }

        btn.classList.add('running')

        const promptPattern = new RegExp(
            this.config.store.quickScriptsPlugin?.promptPattern || '(\\$|#|>|%)\\s*$'
        )
        const timeout = this.config.store.quickScriptsPlugin?.commandTimeout || 30000
        const minDelay = this.config.store.quickScriptsPlugin?.minDelay || 500

        try {
            for (const command of script.commands) {
                await this.sendAndWait(tab, session, command, promptPattern, timeout, minDelay)
            }
        } finally {
            btn.classList.remove('running')
        }
    }

    /**
     * 发送一条命令并等待执行完毕
     * @param tab 终端标签页
     * @param session 终端会话
     * @param command 要执行的命令
     * @param promptPattern 命令提示符正则
     * @param timeout 超时时间（毫秒）
     * @param minDelay 最小延时（毫秒）
     */
    private sendAndWait (
        tab: BaseTerminalTabComponent,
        session: any,
        command: string,
        promptPattern: RegExp,
        timeout: number,
        minDelay: number,
    ): Promise<void> {
        return new Promise<void>((resolve) => {
            let outputBuffer = ''
            let sub: Subscription | null = null
            let timer: any = null
            let resolved = false

            const cleanup = () => {
                if (resolved) {
                    return
                }
                resolved = true
                if (sub) {
                    sub.unsubscribe()
                }
                if (timer) {
                    clearTimeout(timer)
                }
                resolve()
            }

            // 监听终端输出，检测指令提示符
            if (session) {
                sub = session.output$.subscribe((data: string) => {
                    outputBuffer += data

                    if (promptPattern.test(outputBuffer)) {
                        setTimeout(cleanup, minDelay)
                    }
                })
            } else {
                // 没有捕获到 session 走超时盲发
                setTimeout(cleanup, minDelay + 1000)
            }

            // 超时兜底
            timer = setTimeout(cleanup, timeout)

            // 优先使用 Tabby 广播输入，避免回车符号不适配的问题
            if (typeof (tab as any).sendInput === 'function') {
                (tab as any).sendInput(command + '\n')
            } else if (session) {
                session.write(command + '\r')
            }
        })
    }

    /**
     * 新建脚本
     */
    private async addScript (tab: BaseTerminalTabComponent): Promise<void> {
        const ngbModal = this.injector.get(NgbModal)
        const modal = ngbModal.open(ScriptEditModalComponent)
        modal.componentInstance.isNew = true
        modal.componentInstance.scriptName = ''
        modal.componentInstance.commandsText = ''
        // 默认生成随机颜色
        modal.componentInstance.scriptColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')

        try {
            const result = await modal.result
            if (result?.action === 'save' && result.name) {
                const profileId = this.getProfileId(tab)
                const profileScripts = { ...(this.config.store.quickScriptsPlugin?.profileScripts || {}) }
                const scripts: QuickScript[] = [...(profileScripts[profileId] || this.getScriptsForProfile(tab))]
                
                scripts.push({
                    name: result.name,
                    commands: result.commands,
                    color: result.color,
                })

                profileScripts[profileId] = scripts
                this.config.store.quickScriptsPlugin.profileScripts = profileScripts
                this.config.save()
            }
        } catch {
            // 用户取消，忽略
        }
    }

    /**
     * 编辑已有脚本
     */
    private async editScript (tab: BaseTerminalTabComponent, script: QuickScript): Promise<void> {
        const ngbModal = this.injector.get(NgbModal)
        const modal = ngbModal.open(ScriptEditModalComponent)
        modal.componentInstance.isNew = false
        modal.componentInstance.scriptName = script.name
        modal.componentInstance.commandsText = script.commands.join('\n')
        modal.componentInstance.scriptColor = script.color || ('#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'))

        try {
            const result = await modal.result
            const profileId = this.getProfileId(tab)
            const profileScripts = { ...(this.config.store.quickScriptsPlugin?.profileScripts || {}) }
            const scripts: QuickScript[] = [...(profileScripts[profileId] || this.getScriptsForProfile(tab))]
            const idx = scripts.findIndex(s => s.name === script.name)

            if (result?.action === 'save' && result.name) {
                // 更新脚本
                if (idx >= 0) {
                    scripts[idx] = {
                        name: result.name,
                        commands: result.commands,
                        color: result.color,
                    }
                }
                profileScripts[profileId] = scripts
                this.config.store.quickScriptsPlugin.profileScripts = profileScripts
                this.config.save()
            } else if (result?.action === 'delete') {
                // 删除脚本
                if (idx >= 0) {
                    scripts.splice(idx, 1)
                }
                profileScripts[profileId] = scripts
                this.config.store.quickScriptsPlugin.profileScripts = profileScripts
                this.config.save()
            }
        } catch {
            // 用户取消，忽略
        }
    }

    // ==================== 系统资源监控 ====================

    /**
     * 启动系统资源监控（每个 tab 独立）
     */
    private startSysMonitor (bar: HTMLElement, tab: BaseTerminalTabComponent): SysMonitorContext | null {
        const enabled = this.config.store.quickScriptsPlugin?.enableSysMonitor ?? true
        if (!enabled) {
            return null
        }

        // 创建显示元素
        const monitorEl = document.createElement('span')
        monitorEl.className = 'sys-monitor loading'
        monitorEl.textContent = t('采集中...', 'Loading...')
        monitorEl.title = t('远程服务器资源监控（点击刷新）', 'Remote server resource monitor (click to refresh)')

        // 点击手动刷新
        monitorEl.addEventListener('click', () => {
            if (!ctx.running) {
                this.fetchSysInfo(tab, ctx)
            }
        })

        // 插入到 bar 中（在 SFTP 按钮之前）
        const sftpBtn = bar.querySelector('.sftp-btn')
        if (sftpBtn) {
            bar.insertBefore(monitorEl, sftpBtn)
        } else {
            bar.appendChild(monitorEl)
        }

        const ctx: SysMonitorContext = {
            timer: null,
            element: monitorEl,
            running: false,
            destroyed: false,
        }

        // 延迟首次采集（等 SSH 就绪）
        setTimeout(() => {
            if (!ctx.destroyed) {
                this.fetchSysInfo(tab, ctx)
            }
        }, 2000)

        // 定时采集
        const interval = this.config.store.quickScriptsPlugin?.sysMonitorInterval || 5000
        ctx.timer = setInterval(() => {
            if (!ctx.destroyed && !ctx.running) {
                this.fetchSysInfo(tab, ctx)
            }
        }, interval)

        return ctx
    }

    /**
     * 停止系统监控
     */
    private stopSysMonitor (ctx: SysMonitorContext): void {
        if (ctx.timer) {
            clearInterval(ctx.timer)
            ctx.timer = null
        }
    }

    /**
     * 通过 SSH exec channel 采集系统信息（方案 B）
     * 降级：如果 exec channel 不可用，通过终端 session 采集（方案 A）
     */
    private async fetchSysInfo (tab: BaseTerminalTabComponent, ctx: SysMonitorContext): Promise<void> {
        if (ctx.running || ctx.destroyed) {
            return
        }
        ctx.running = true

        try {
            // 优先尝试方案 B：独立 SSH exec channel
            const sshSession = (tab as any).sshSession || (tab as any).session
            if (sshSession?.ssh?.openSessionChannel) {
                const result = await this.fetchViaExecChannel(sshSession)
                if (result) {
                    this.updateMonitorDisplay(ctx, result)
                    return
                }
            }

            // 只有在手动点击（非定时自动）或者用户明确允许回退的情况下才走 Plan A
            // 为避免干扰用户，定时刷新如果 Plan B 失败则静默
            this.logger.debug('Plan B failed, skipping Plan A fallback to avoid terminal pollution')
            ctx.element.classList.add('loading')
        } catch (err) {
            this.logger.warn('System monitor fetch failed', err)
            ctx.element.textContent = t('采集失败', 'N/A')
            ctx.element.classList.add('loading')
        } finally {
            ctx.running = false
        }
    }

    /**
     * 方案 B：通过独立 SSH exec channel 采集
     */
    private async fetchViaExecChannel (sshSession: any): Promise<string | null> {
        try {
            const ssh = sshSession.ssh
            const newCh = await ssh.openSessionChannel()
            const channel = await ssh.activateChannel(newCh)

            // 尝试使用 exec 方法
            if (typeof channel.exec === 'function') {
                await channel.exec(true, SYS_MONITOR_CMD)
            } else if (typeof channel.requestExec === 'function') {
                await channel.requestExec(SYS_MONITOR_CMD)
            } else {
                // channel 没有 exec 方法，关闭并返回 null
                try { channel.close() } catch { /* ignore */ }
                return null
            }

            // 收集输出
            let output = ''
            const dataPromise = new Promise<string>((resolve) => {
                const timeout = setTimeout(() => resolve(output), 8000)
                if (channel.data$) {
                    const sub = channel.data$.subscribe({
                        next: (data: any) => {
                            const text = typeof data === 'string' ? data : new TextDecoder().decode(data)
                            output += text
                            if (output.includes('SYSMON:')) {
                                clearTimeout(timeout)
                                sub.unsubscribe()
                                resolve(output)
                            }
                        },
                        error: () => {
                            clearTimeout(timeout)
                            resolve(output)
                        },
                    })
                    // channel 关闭时也 resolve
                    if (channel.closed$) {
                        channel.closed$.subscribe(() => {
                            clearTimeout(timeout)
                            sub.unsubscribe()
                            resolve(output)
                        })
                    }
                } else {
                    // 没有 data$ observable，超时返回
                    clearTimeout(timeout)
                    resolve('')
                }
            })

            const rawOutput = await dataPromise
            try { channel.close() } catch { /* ignore */ }

            return this.parseSysMonOutput(rawOutput)
        } catch (err) {
            this.logger.debug('Exec channel failed, will fallback', err)
            return null
        }
    }

    /**
     * 方案 A（降级）：通过终端 session 发送命令采集
     */
    private async fetchViaTerminal (tab: BaseTerminalTabComponent): Promise<string | null> {
        const session = tab.session
            || (tab as any).getActiveSession?.()
            || (tab as any).getActivePane?.()?.session
            || (tab as any).activePane?.session

        if (!session || typeof session.output$?.subscribe !== 'function') {
            return null
        }

        let outputBuffer = ''
        const sub = session.output$.subscribe((data: string) => {
            outputBuffer += data
        })

        // 发送采集命令
        const cmd = SYS_MONITOR_CMD + '\n'
        if (typeof (tab as any).sendInput === 'function') {
            (tab as any).sendInput(cmd)
        } else {
            session.write(cmd.replace('\n', '\r'))
        }

        // 等待输出（最多8秒）
        const result = await new Promise<string | null>((resolve) => {
            const timeout = setTimeout(() => {
                sub.unsubscribe()
                resolve(this.parseSysMonOutput(outputBuffer))
            }, 8000)

            const checkInterval = setInterval(() => {
                if (outputBuffer.includes('SYSMON:')) {
                    clearTimeout(timeout)
                    clearInterval(checkInterval)
                    // 多等100ms确保完整接收
                    setTimeout(() => {
                        sub.unsubscribe()
                        resolve(this.parseSysMonOutput(outputBuffer))
                    }, 100)
                }
            }, 200)
        })

        return result
    }

    /**
     * 解析 SYSMON 输出为数据对象
     */
    private parseSysMonOutput (raw: string): any | null {
        // 匹配格式: SYSMON:CPU:MEM:DISK:UL:DL
        const match = raw.match(/SYSMON:([^:]*):([^:]*):([^:]*):([^:]*):([^\s:]*)/)
        if (!match) {
            return null
        }

        return {
            cpu: parseInt(match[1]) || 0,
            mem: parseInt(match[2]) || 0,
            disk: parseInt(match[3]) || 0,
            ul: parseFloat(match[4]) || 0,
            dl: parseFloat(match[5]) || 0,
        }
    }

    /**
     * 根据百分比获取颜色
     */
    private getColorForValue (val: number): string {
        if (val <= 50) return '#2ecc71' // 绿色
        if (val <= 80) return '#f1c40f' // 黄色
        return '#e74c3c' // 红色
    }

    /**
     * 根据网速获取颜色 (Mbps)
     */
    private getColorForNet (val: number): string {
        if (val <= 1) return '#2ecc71' // 绿色
        if (val <= 5) return '#f1c40f' // 黄色
        return '#e74c3c' // 红色
    }

    /**
     * 更新监控显示元素
     */
    private updateMonitorDisplay (ctx: SysMonitorContext, data: any): void {
        if (ctx.destroyed || !data) {
            return
        }

        const cpuHtml = `<span style="color: ${this.getColorForValue(data.cpu)}">C_${data.cpu}%</span>`
        const memHtml = `<span style="color: ${this.getColorForValue(data.mem)}">M_${data.mem}%</span>`
        const diskHtml = `<span style="color: ${this.getColorForValue(data.disk)}">H_${data.disk}%</span>`
        const ulHtml = `<span style="color: ${this.getColorForNet(data.ul)}">↑_${data.ul}</span>`
        const dlHtml = `<span style="color: ${this.getColorForNet(data.dl)}">↓_${data.dl}</span>`

        ctx.element.innerHTML = `${cpuHtml} | ${memHtml} | ${diskHtml} | ${ulHtml} | ${dlHtml}`
        ctx.element.classList.remove('loading')
    }
}
