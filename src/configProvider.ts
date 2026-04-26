import { ConfigProvider } from 'tabby-core'

/** 快捷脚本接口定义 */
export interface QuickScript {
    name: string
    commands: string[]
}

/** 插件配置默认值 */
export class QuickScriptsConfigProvider extends ConfigProvider {
    defaults = {
        quickScriptsPlugin: {
            /** 脚本列表 */
            scripts: [] as QuickScript[],
            /** 命令提示符正则（用于判断上一条命令执行完毕） */
            promptPattern: '(\\$|#|>|%)\\s*$',
            /** 超时时间（毫秒），超过此时间强制执行下一条命令 */
            commandTimeout: 30000,
            /** 发送命令前的最小延时（毫秒） */
            minDelay: 500,
        },
    }
}
