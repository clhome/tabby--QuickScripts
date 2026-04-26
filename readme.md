# Tabby Quick Scripts 插件

`tabby-quick-scripts` 是一款专为 [Tabby 终端](https://github.com/Eugeny/tabby) 开发的快捷脚本面板插件。它能够在终端标签页上方显示常驻的快捷脚本按钮，方便一键执行多条预设的运维或开发命令。

---

## 🌟 功能特性

* **常驻工具栏**：在 SSH、串口等终端面板的顶部注入一个快捷按钮栏。
* **顺序执行机制**：支持逐行、按顺序发送多条命令。插件会自动检测终端提示符（如 `$`, `#`, `>`, `%`），确保上一条命令完成响应后再发送下一条。
* **可视化管理**：
  * **新建**：点击工具栏最右侧的 `+` 号添加新脚本。
  * **执行**：左键单击脚本名称即可开始依次运行预设指令。
  * **管理**：右键单击对应脚本可进入编辑模式或进行删除。

---

## 📦 安装与部署 (本地加载)

作为一个本地开发的插件，你需要手动或通过软链接将该项目导入到 Tabby 的插件存放目录的 `node_modules` 中。

### 默认 Tabby 插件路径
- **Windows**: `%APPDATA%\tabby\plugins\node_modules\` （例如：`C:\Users\你的用户名\AppData\Roaming\tabby\plugins\node_modules\`）
- **macOS**: `~/Library/Application Support/tabby/plugins/node_modules/`
- **Linux**: `~/.config/tabby/plugins/node_modules/`

### 方式一：创建符号链接（推荐）
最便捷的方式是在 `node_modules` 目录下新建软链接，无需频繁复制构建后的文件。

**PowerShell (Windows):**
```powershell
# 注意：请将 -Target 后面的路径替换为本项目源码在你电脑上的真实绝对路径
New-Item -ItemType SymbolicLink -Path "$env:APPDATA\tabby\plugins\node_modules\tabby-quick-scripts" -Target "D:\git\gitea\tabby--QuickScripts"
```

### 方式二：手动拷贝发布
若使用软链接不便，可在项目构建完成后，必须按照项目原有目录结构将其拷贝至 Tabby 的 `node_modules` 目录。
1. 运行构建：`npm run build`
2. 在 Tabby 插件的 `node_modules` 目录中新建 `tabby-quick-scripts` 文件夹。
3. 将项目中的 **`package.json`** 文件以及整个 **`dist/`** 文件夹（注意：必须是保留 `dist` 文件夹层级，不能直接将 `dist` 内的文件提取至根目录）完整拷贝至该新建文件夹中。

> ⚠️ **提示**：无论是何种安装方式，配置完成后必须**完全退出并重新启动 Tabby** 才能成功加载。

---

## 🛠️ 本地开发指南

如果你需要对插件逻辑进行维护、二次开发或修复 Bug，可遵循以下规范：

1. **准备环境**
   确保你本地已安装 Node.js 环境，在项目根目录执行安装命令：
   ```bash
   npm install
   ```

2. **打包构建**
   ```bash
   # 单次构建（生产环境）
   npm run build
   ```

3. **热更新 / 监听模式**
   开发过程中推荐使用 watch 模式，只要修改了 `src/` 内的源码，就会触发自动增量构建：
   ```bash
   npm run watch
   ```

---

## ⚙️ 高级配置项

插件默认的指令等待提示符正则为 `(\$|#|>|%)\s*$`。若你有特定的设备或定制化 Shell，可以在 Tabby 的 `config.yaml` 配置中找到 `quickScriptsPlugin` 字段调整参数：

```yaml
quickScriptsPlugin:
  promptPattern: '(\$|#|>|%)\s*$'  # 判断上一条命令结束的正则匹配式
  commandTimeout: 30000             # 单条命令超时等待上限 (ms)
  minDelay: 500                     # 发送命令之间的最小物理安全延迟 (ms)
```
