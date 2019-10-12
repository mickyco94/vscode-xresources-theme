# Xresources Theme

This extensions for Visual Studio Code adds a **real time updated theme** that is dynamically generated from the color palette in your existing Xresources file.

<!-- ## Screenshots

![Example 1](https://raw.githubusercontent.com/dlasagno/vscode-wal-theme/master/screenshots/1.png)

![Example 2](https://raw.githubusercontent.com/dlasagno/vscode-wal-theme/master/screenshots/2.png)

![Example 3](https://raw.githubusercontent.com/dlasagno/vscode-wal-theme/master/screenshots/3.png) -->

## Features

- Real time updates of the color scheme
- Two variants available: borderless and bordered
- Works out of the box: just set xresourcesPath at first startup

## Requirements

In order to use this extension xrdb is needed, if your Xresources file is configured correctly it should be working, check with `xrdb -query -all`

## Extension Commands

This extension contributes the following command:

- `xresourcesTheme.update`: execute a manual update of the theme

## Extension Settings

This extension contributes the following settings:

- `xresourcesTheme.autoUpdate`: enable/disable the auto update of the theme provided by this extension
- `xresourcesTheme.xresourcesPath`: path to the Xresources file

## Troubleshooting

If the extension doesn't update automatically, while the auto updates are enabled, try to do a manual update with the update command.
If the manual update doesn't work try reloading the window.

---

## Credits

This extension is forked from [vscode-wal-theme](https://github.com/dlasagno/vscode-wal-theme), which was inspired by [Ayu](https://github.com/ayu-theme/vscode-ayu) and [vscode-wal](https://github.com/bluedrack/vscode-wal).
