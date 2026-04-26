import { Injector } from '@angular/core';
import { ConfigService } from 'tabby-core';
import { TerminalDecorator, BaseTerminalTabComponent } from 'tabby-terminal';
import './quickScriptsBar.scss';
export declare class QuickScriptsDecorator extends TerminalDecorator {
    private config;
    private injector;
    constructor(config: ConfigService, injector: Injector);
    attach(tab: BaseTerminalTabComponent): void;
    detach(_tab: BaseTerminalTabComponent): void;
    /**
     * 在终端 tab 的 DOM 中注入脚本按钮栏
     */
    private injectBar;
    /**
     * 获取当前终端标签页的站点 Profile ID
     */
    private getProfileId;
    /**
     * 获取当前站点的专属脚本列表（带旧数据向前兼容）
     */
    private getScriptsForProfile;
    /**
     * 渲染按钮栏内容
     */
    private renderButtons;
    /**
     * 执行脚本：按顺序逐条发送命令
     * 策略：发送命令后监听 output$，检测到提示符再发下一条，超时兜底
     */
    private executeScript;
    /**
     * 发送一条命令并等待执行完毕
     * @param tab 终端标签页
     * @param session 终端会话
     * @param command 要执行的命令
     * @param promptPattern 命令提示符正则
     * @param timeout 超时时间（毫秒）
     * @param minDelay 最小延时（毫秒）
     */
    private sendAndWait;
    /**
     * 新建脚本
     */
    private addScript;
    /**
     * 编辑已有脚本
     */
    private editScript;
}
