import { Injectable, Injector } from '@angular/core'
import { t } from './i18n'
import { Subscription } from 'rxjs'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ConfigService } from 'tabby-core'
import { TerminalDecorator, BaseTerminalTabComponent } from 'tabby-terminal'
import { QuickScript } from './configProvider'
import { ScriptEditModalComponent } from './scriptEditModal'
import { SftpUiService } from './sftp/sftp-ui.service'

import './quickScriptsBar.scss'

@Injectable()
export class QuickScriptsDecorator extends TerminalDecorator {
    constructor (
        private config: ConfigService,
        private injector: Injector,
        private sftpUi: SftpUiService,
    ) {
        super()
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

        // 监听配置变化，刷新按钮
        const sub = this.config.changed$.subscribe(() => {
            this.renderButtons(bar, tab)
        })

        // tab 销毁时清理
        tab.destroyed$.subscribe(() => {
            sub.unsubscribe()
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

        // SFTP 按钮
        const sftpBtn = document.createElement('button')
        sftpBtn.className = 'script-btn sftp-btn'
        sftpBtn.style.backgroundColor = '#f1c40f' // 黄色背景
        sftpBtn.style.color = '#000' // 黑色文字，保证可读性
        sftpBtn.style.marginLeft = 'auto' // 推到最右侧
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
}
