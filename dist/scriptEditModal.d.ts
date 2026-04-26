import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * 脚本编辑弹窗组件
 * 用于新建和编辑快捷脚本
 */
export declare class ScriptEditModalComponent {
    private modalInstance;
    /** 脚本名称 */
    scriptName: string;
    /** 命令文本（换行分隔） */
    commandsText: string;
    /** 标签颜色 */
    scriptColor: string;
    /** 是否为新建模式 */
    isNew: boolean;
    constructor(modalInstance: NgbActiveModal);
    /** 保存并关闭弹窗 */
    save(): void;
    /** 删除脚本 */
    deleteScript(): void;
    /** 取消操作 */
    cancel(): void;
}
