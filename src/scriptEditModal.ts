import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

/**
 * 脚本编辑弹窗组件
 * 用于新建和编辑快捷脚本
 */
@Component({
    template: `
        <div class="modal-header">
            <h5 class="modal-title">{{ isNew ? '新建脚本' : '编辑脚本' }}</h5>
            <button type="button" class="close" (click)="cancel()">
                <span>&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label>脚本名称</label>
                <input
                    type="text"
                    class="form-control"
                    [(ngModel)]="scriptName"
                    placeholder="输入脚本名称"
                    autofocus
                />
            </div>
            <div class="form-group mt-3 d-flex align-items-center">
                <label class="mb-0 mr-3">标签颜色</label>
                <input
                    type="color"
                    [(ngModel)]="scriptColor"
                    style="width: 40px; height: 28px; padding: 0; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; background: transparent; border-radius: 3px;"
                />
            </div>
            <div class="form-group mt-3">
                <label>命令列表 <small class="text-muted">（一行一条命令，按顺序执行）</small></label>
                <textarea
                    class="form-control"
                    [(ngModel)]="commandsText"
                    rows="10"
                    placeholder="cd /tmp&#10;ls -la&#10;whoami"
                    style="font-family: monospace; font-size: 13px;"
                ></textarea>
            </div>
        </div>
        <div class="modal-footer">
            <button *ngIf="!isNew" class="btn btn-danger mr-auto" (click)="deleteScript()">
                删除脚本
            </button>
            <button class="btn btn-outline-secondary" (click)="cancel()">取消</button>
            <button class="btn btn-primary" (click)="save()" [disabled]="!scriptName.trim()">
                保存
            </button>
        </div>
    `,
})
export class ScriptEditModalComponent {
    /** 脚本名称 */
    scriptName = ''

    /** 命令文本（换行分隔） */
    commandsText = ''

    /** 标签颜色 */
    scriptColor = '#5588cc'

    /** 是否为新建模式 */
    isNew = true

    constructor (private modalInstance: NgbActiveModal) {}

    /** 保存并关闭弹窗 */
    save (): void {
        const commands = this.commandsText
            .split('\n')
            .map(line => line.trimEnd())
            .filter(line => line.length > 0)

        this.modalInstance.close({
            action: 'save',
            name: this.scriptName.trim(),
            commands,
            color: this.scriptColor,
        })
    }

    /** 删除脚本 */
    deleteScript (): void {
        this.modalInstance.close({
            action: 'delete',
        })
    }

    /** 取消操作 */
    cancel (): void {
        this.modalInstance.dismiss()
    }
}
