# 🚀 Tabby Quick Scripts Plugin

[![Tabby Version](https://img.shields.io/badge/Tabby-%3E%3D1.0.0-blueviolet)](https://github.com/Eugeny/tabby)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/clhome/tabby--QuickScripts)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

[中文版](readme中文.md)

![processed_1778306177510](readme中文.assets/processed_1778306177510.webp)

`tabby-quick-scripts` is an enhancement plugin tailored for the **[Tabby Terminal](https://github.com/Eugeny/tabby)**. It injects a shortcut toolbar above the terminal tabs, helping users efficiently manage and execute preset multi-line commands with a single click, while integrating powerful SFTP auxiliary features.

> [!WARNING]
> ### ⚠️ Strongly Recommended to Upgrade to Version 3.4 or Later!
> Earlier versions may have **memory leak risks**, which under special circumstances or long-running connections could cause the Tabby interface to lag or slow down.
> Subsequent versions underwent **comprehensive underlying refactoring & deep optimization** of the plugin communication, timer mechanisms, and page lifecycle to completely resolve this issue. All users are strongly advised to upgrade as soon as possible.
>
> **📢 Key Refactoring & Optimizations in 3.4+:**
> 1. **🔧 Underlying Refactoring & Leak Fixes**: Redesigned SSH connection channels and timer lifecycles, fully resolving SSH data queueing and timer accumulation in long sessions to guarantee butter-smooth operation.
> 2. **📂 Upgraded SFTP Experience**: Introduced remote file octal permissions (`Perms`) and owner (`Owner`) column rendering, with support for modifying file permissions via an interactive confirmation modal.
> 3. **🗺️ Stable Breadcrumbs & Navigation**: Refactored remote path navigation (`goToRemotePath`), ensuring breadcrumbs automatically and reliably update upon first connection or selecting favorite folders.
> 4. **🔎 Smart Sorting & Time Highlighting**: Local and remote files sorted by modification time (descending) by default, with precision highlighting for Year, Month, Day, Hour, and Minute matching current times.
> 5. **🌐 Full Dual-Language Adaptations**: Full adaptation and seamless display support for both English and Chinese across all UI components.

---

## ✨ Core Features

- **⚡ Quick Script Toolbar**: Displays a persistent shortcut button bar at the top of SSH, Serial, Telnet, and other terminal panels.
- **🤖 Intelligent Sequential Execution**: Supports sending multi-line commands in order. Built-in prompt detection (`$`, `#`, `>`, `%`) ensures the next command is sent only after the previous one has responded, avoiding command stacking.
- **📂 Enhanced SFTP Module**:
  - **Performance Optimized**: Uses concurrent I/O for lightning-fast loading of folders with hundreds of files, eliminating UI lag.
  - **Windows Drive Switching**: Left-click the root drive (e.g., `C:`) in the path bar to instantly switch between all local drives.
  - **Smart Default Path**: Automatically defaults to the root of your last local drive on Windows for quicker access.
  - **Granular Time Highlighting**: Independently highlights matching Year, Month, Day, Hour, and Minute for intuitive file scanning.
  - **Native Experience**: Includes path favorites, physical button click feedback, and seamless drag-and-drop transfers.
- **🎨 Visual Management**:
  - **Create**: Add new scripts quickly by clicking the `+` icon on the right side of the toolbar.
  - **Execute**: Left-click a script button to trigger execution immediately.
  - **Manage**: Right-click a button to enter edit mode, customize colors, or reorder scripts.
- **🖥️ Real-time Server Monitor**:
  - **High-Precision Sampling**: Uses a dual-pass algorithm to avoid `top` command glitches, providing accurate instantaneous CPU usage.
  - **Improved Stability**: Resolved SSH channel and timer leaks to ensure smooth long-term operation.
  - **Visual Metrics**: Real-time display of CPU, Memory, Disk usage, and Network speed (Mbps).

---

## 📦 Installation

### Method 1: Install from Official Plugin Store (Recommended)

1. Open Tabby **Settings** -> **Plugins**.
2. Search for `tabby-quick-scripts-chenlei`.
3. Click the **Install** button and restart Tabby after completion.

![image-20260509105621928](readme中文.assets/image-20260509105621928.png)

---

## 📖 Usage Guide

### 1. Script Management

- **Left Click**: Immediately trigger script execution.
- **Right Click**: Open the edit modal to modify commands or delete the script.

![image-20260509111520036](readme中文.assets/image-20260509111520036.png)

![image-20260509111751792](readme中文.assets/image-20260509111751792.png)

### 2. Enhanced SFTP Module

Click the **`SFTP`** button in the top right corner of the terminal to open the enhanced panel.

![image-20260509111928140](readme中文.assets/image-20260509111928140.png)

- **Path Favorites**: Click the star icon to bookmark the current path, and quickly switch via the dropdown menu on the right.
- **Time Matching**: As shown below, the parts of the date/time matching the current time will be displayed in a prominent color.

![image-20260509112736437](readme中文.assets/image-20260509112736437.png)

### 3. Real-time Server Resource Monitor (New features in version 3.0)

The monitor bar displays live statistics from the remote Linux server (refreshes every 5 seconds).

- **📊 Display Metrics**: `CPU (C)`, `Memory (M)`, `Disk (H)`, and `Network (↑/↓ Mbps)`.
- **🌈 Color Grading**:
  - **CPU/Mem/Disk**: `0-50%` Green, `51-80%` Yellow, `>80%` Red.
  - **Network Speed**: `0-1 Mbps` Green, `1-5 Mbps` Yellow, `>5 Mbps` Red.
- **✨ Stable UI**: Percentages below 10% are automatically zero-padded (e.g., `05%`) to prevent layout jumping.
- **⚡ Click to Refresh**: Click the monitor bar to trigger an immediate manual update.
- **🛡️ Non-Intrusive**: Uses independent SSH EXEC channels for data collection, ensuring your terminal input is never interrupted or polluted.
![image-20260515104831482](readme中文.assets/image-20260515104831482.jpg)

## 🛠️ Local Development & Manual Installation

If you need to install manually or perform secondary development:

### 1. Plugin Storage Path

- **Windows**: `%APPDATA%\tabby\plugins\node_modules\`
- **macOS**: `~/Library/Application Support/tabby/plugins/node_modules/`
- **Linux**: `~/.config/tabby/plugins/node_modules/`

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
  promptPattern: '(\$|#|>|%)\s*$' # Regex to determine the end of the previous command
  commandTimeout: 30000 # Maximum wait time for a single command (ms)
  minDelay: 500 # Minimum physical safety delay between commands (ms)
  enableSysMonitor: true # Enable/Disable real-time resource monitor
  sysMonitorInterval: 5000 # Monitor refresh interval (ms)
```

---

## 📄 License

Licensed under the [MIT](LICENSE) License.
