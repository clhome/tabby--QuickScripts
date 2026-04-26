import { Injectable, Injector } from '@angular/core'
import { Subscription } from 'rxjs'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ConfigService } from 'tabby-core'
import { TerminalDecorator, BaseTerminalTabComponent } from 'tabby-terminal'
import { QuickScript } from './configProvider'
import { ScriptEditModalComponent } from './scriptEditModal'

import './quickScriptsBar.scss'

@Injectable()
export class QuickScriptsDecorator extends TerminalDecorator {
    constructor (
        private config: ConfigService,
        private injector: Injector,
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
     * 渲染按钮栏内容
     */
    private renderButtons (bar: HTMLElement, tab: BaseTerminalTabComponent): void {
        bar.innerHTML = ''

        const scripts: QuickScript[] = this.config.store.quickScriptsPlugin?.scripts || []

        // 渲染每个脚本按钮
        for (const script of scripts) {
            const btn = document.createElement('button')
            btn.className = 'script-btn'
            btn.textContent = script.name
            btn.title = `点击执行: ${script.commands.join(' → ')}`

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
                this.editScript(script)
            })

            bar.appendChild(btn)
        }

        // 新建按钮 (+)
        const addBtn = document.createElement('button')
        addBtn.className = 'script-btn-add'
        addBtn.textContent = '+'
        addBtn.title = '新建脚本'
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            this.addScript()
        })
        bar.appendChild(addBtn)
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

        const session = tab.session
        if (!session) {
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
                await this.sendAndWait(session, command, promptPattern, timeout, minDelay)
            }
        } finally {
            btn.classList.remove('running')
        }
    }

    /**
     * 发送一条命令并等待执行完毕
     * @param session 终端会话
     * @param command 要执行的命令
     * @param promptPattern 命令提示符正则
     * @param timeout 超时时间（毫秒）
     * @param minDelay 最小延时（毫秒）
     */
    private sendAndWait (
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

            // 监听终端输出
            sub = session.output$.subscribe((data: string) => {
                outputBuffer += data

                // 检查是否出现命令提示符（说明上一条命令已执行完毕）
                if (promptPattern.test(outputBuffer)) {
                    // 延时一下再完成，确保输出完全渲染
                    setTimeout(cleanup, minDelay)
                }
            })

            // 超时兜底
            timer = setTimeout(cleanup, timeout)

            // 发送命令（\r 表示回车）
            session.write(command + '\r')
        })
    }

    /**
     * 新建脚本
     */
    private async addScript (): Promise<void> {
        const ngbModal = this.injector.get(NgbModal)
        const modal = ngbModal.open(ScriptEditModalComponent)
        modal.componentInstance.isNew = true
        modal.componentInstance.scriptName = ''
        modal.componentInstance.commandsText = ''

        try {
            const result = await modal.result
            if (result?.action === 'save' && result.name) {
                const scripts: QuickScript[] = [
                    ...(this.config.store.quickScriptsPlugin?.scripts || []),
                ]
                scripts.push({
                    name: result.name,
                    commands: result.commands,
                })
                this.config.store.quickScriptsPlugin.scripts = scripts
                this.config.save()
            }
        } catch {
            // 用户取消，忽略
        }
    }

    /**
     * 编辑已有脚本
     */
    private async editScript (script: QuickScript): Promise<void> {
        const ngbModal = this.injector.get(NgbModal)
        const modal = ngbModal.open(ScriptEditModalComponent)
        modal.componentInstance.isNew = false
        modal.componentInstance.scriptName = script.name
        modal.componentInstance.commandsText = script.commands.join('\n')

        try {
            const result = await modal.result
            const scripts: QuickScript[] = [
                ...(this.config.store.quickScriptsPlugin?.scripts || []),
            ]
            const idx = scripts.indexOf(script)

            if (result?.action === 'save' && result.name) {
                // 更新脚本
                if (idx >= 0) {
                    scripts[idx] = {
                        name: result.name,
                        commands: result.commands,
                    }
                }
                this.config.store.quickScriptsPlugin.scripts = scripts
                this.config.save()
            } else if (result?.action === 'delete') {
                // 删除脚本
                if (idx >= 0) {
                    scripts.splice(idx, 1)
                }
                this.config.store.quickScriptsPlugin.scripts = scripts
                this.config.save()
            }
        } catch {
            // 用户取消，忽略
        }
    }
}
