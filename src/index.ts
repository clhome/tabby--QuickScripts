import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import TabbyCoreModule, { ConfigProvider } from 'tabby-core'
import { TerminalDecorator } from 'tabby-terminal'

import { QuickScriptsConfigProvider } from './configProvider'
import { QuickScriptsDecorator } from './terminalDecorator'
import { ScriptEditModalComponent } from './scriptEditModal'
import { SftpManagerTabComponent } from './sftp/sftp-manager-tab.component'
import { SftpUiService } from './sftp/sftp-ui.service'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TabbyCoreModule,
    ],
    providers: [
        { provide: ConfigProvider, useClass: QuickScriptsConfigProvider, multi: true },
        { provide: TerminalDecorator, useClass: QuickScriptsDecorator, multi: true },
        SftpUiService,
    ],
    entryComponents: [
        ScriptEditModalComponent,
        SftpManagerTabComponent,
    ],
    declarations: [
        ScriptEditModalComponent,
        SftpManagerTabComponent,
    ],
})
export default class QuickScriptsModule { }

