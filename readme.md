# 🚀 Tabby Quick Scripts Plugin

[![Tabby Version](https://img.shields.io/badge/Tabby-%3E%3D1.0.0-blueviolet)](https://github.com/Eugeny/tabby)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

`tabby-quick-scripts` is an enhancement plugin tailored for the **[Tabby Terminal](https://github.com/Eugeny/tabby)**. It injects a shortcut toolbar above the terminal tabs, helping users efficiently manage and execute preset multi-line commands with a single click, while integrating powerful SFTP auxiliary features.

---

## ✨ Core Features

*   **⚡ Quick Script Toolbar**: Displays a persistent shortcut button bar at the top of SSH, Serial, Telnet, and other terminal panels.
*   **🤖 Intelligent Sequential Execution**: Supports sending multi-line commands in order. Built-in prompt detection (`$`, `#`, `>`, `%`) ensures the next command is sent only after the previous one has responded, avoiding command stacking.
*   **📂 Enhanced SFTP Module**:
    *   **Auto Directory Sync**: Automatically navigates the SFTP remote panel to the current terminal's working directory upon opening.
    *   **Dual-Side Favorites**: Bookmark frequently used paths for both local and remote sides for rapid navigation.
    *   **Smart Time Highlighting**: File modification times (Year-Month-Day-Hour-Minute) matching the current system time are automatically highlighted in **Green/Yellow**, allowing you to instantly locate the latest logs or files.
    *   **Native Drag-and-Drop**: Supports drag-and-drop file/folder transfers between left and right panels, or directly from system folders to the remote server.
*   **🎨 Visual Management**:
    *   **Create**: Add new scripts quickly by clicking the `+` icon on the right side of the toolbar.
    *   **Execute**: Left-click a script button to trigger execution immediately.
    *   **Manage**: Right-click a button to enter edit mode, customize colors, or reorder scripts.

---

## 📦 Installation

### Method 1: Install from Official Plugin Store (Recommended)

1.  Open Tabby **Settings** -> **Plugins**.
2.  Search for `tabby-quick-scripts-chenlei`.
3.  Click the **Install** button and restart Tabby after completion.

![image-20260509105621928](readme中文.assets/image-20260509105621928.png)

---

## 📖 Usage Guide

### 1. Script Management
*   **Left Click**: Immediately trigger script execution.
*   **Right Click**: Open the edit modal to modify commands or delete the script.

![image-20260509111520036](readme中文.assets/image-20260509111520036.png)
![image-20260509111751792](readme中文.assets/image-20260509111751792.png)

### 2. Enhanced SFTP Module
Click the **`SFTP`** button in the top right corner of the terminal to open the enhanced panel.

![image-20260509111928140](readme中文.assets/image-20260509111928140.png)

*   **Path Favorites**: Click the star icon to bookmark the current path, and quickly switch via the dropdown menu on the right.
*   **Time Matching**: As shown below, the parts of the date/time matching the current time will be displayed in a prominent color.

![image-20260509112736437](readme中文.assets/image-20260509112736437.png)

---

## 🛠️ Local Development & Manual Installation

If you need to install manually or perform secondary development:

### 1. Plugin Storage Path
*   **Windows**: `%APPDATA%\tabby\plugins\node_modules\`
*   **macOS**: `~/Library/Application Support/tabby/plugins/node_modules/`
*   **Linux**: `~/.config/tabby/plugins/node_modules/`

### 2. Symbolic Link Deployment (Recommended)
Create a symbolic link in the `node_modules` directory pointing to this project's source code to avoid repetitive copying.

**PowerShell (Run as Administrator):**
```powershell
# Ensure the path after -Target is the actual path to your local source code
New-Item -ItemType SymbolicLink -Path "$env:APPDATA\tabby\plugins\node_modules\tabby-quick-scripts" -Target "F:\git\gitea20250909\tabby--QuickScripts"
```

### 3. Build Commands
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Watch mode for development (auto-rebuild on changes)
npm run watch
```

> [!IMPORTANT]
> **Note**: Regardless of the installation method, you must **fully exit and restart Tabby** for the plugin to take effect.

---

## ⚙️ Advanced Configuration (config.yaml)

You can fine-tune the script execution logic by modifying Tabby's global configuration file `config.yaml`:

```yaml
quickScriptsPlugin:
  promptPattern: '(\$|#|>|%)\s*$'  # Regex to determine the end of the previous command
  commandTimeout: 30000             # Maximum wait time for a single command (ms)
  minDelay: 500                     # Minimum physical safety delay between commands (ms)
```

---

## 📄 License
Licensed under the [MIT](LICENSE) License.
