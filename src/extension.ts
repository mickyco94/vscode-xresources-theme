import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as Color from 'color';
import template from './template';
import { execSync } from 'child_process';

var xresourcesColorsPath: string | undefined = vscode.workspace.getConfiguration().get("xresourcesTheme.xresourcesPath");
expandPath();
let autoUpdateWatcher: fs.FSWatcher | null = null;

function expandPath() {
	if (xresourcesColorsPath !== undefined) {
		if (xresourcesColorsPath.startsWith("~")) {
			xresourcesColorsPath = os.homedir() + xresourcesColorsPath.substring(1);
		} else if (! xresourcesColorsPath.startsWith("/")) {
			xresourcesColorsPath = os.homedir() + "/" + xresourcesColorsPath;
		}
	}
}

function askForXresources(): Thenable<void> {
	return vscode.window.showInputBox({prompt: "Path to .Xresources file", placeHolder: ".Xresources"}).then(x => {
		if (x !== undefined) {
			xresourcesColorsPath = x;
			vscode.workspace.getConfiguration().update("xresourcesTheme.xresourcesPath", x);
		}
	});
}

export async function activate(context: vscode.ExtensionContext) {

	xresourcesColorsPath = vscode.workspace.getConfiguration().get("xresourcesTheme.xresourcesPath");
	if (xresourcesColorsPath === undefined || xresourcesColorsPath === "") {
		await askForXresources();
	}
	expandPath();
	generateColorThemes();

	// Register the update command
	let disposable = vscode.commands.registerCommand('xresourcesTheme.update', generateColorThemes);
	context.subscriptions.push(disposable);

	// Start the auto update if enabled
	if(vscode.workspace.getConfiguration().get('xresourcesTheme.autoUpdate')) {
		generateColorThemes(); // Needed for when xresources palette updates while vscode isn't running
		autoUpdateWatcher = autoUpdate();
	}

	// Toggle the auto update in real time when changing the extension configuration
	vscode.workspace.onDidChangeConfiguration(event => {
		let wsconfig = vscode.workspace.getConfiguration();
		if (event.affectsConfiguration("xresourcesTheme.xresourcesPath")) {
			console.log("path updated");
			xresourcesColorsPath = wsconfig.get("xresourcesTheme.xresourcesPath");
			expandPath();
			console.log(xresourcesColorsPath);
			if (xresourcesColorsPath !== undefined) {
				if (wsconfig.get("xresourcesTheme.autoUpdate")) {
					console.log("reloading updater");
					autoUpdateWatcher = autoUpdate();
				}
			}
		}
		if(event.affectsConfiguration('xresourcesTheme.autoUpdate')) {
			console.log("autoUpdate changed");
			if(wsconfig.get('xresourcesTheme.autoUpdate')) {
				if(autoUpdateWatcher === null) {
					autoUpdateWatcher = autoUpdate();
				}
			}
			else if(autoUpdateWatcher !== null) {
				autoUpdateWatcher.close();
				autoUpdateWatcher = null;
			}
		}
	});

}

export function deactivate() {

	// Close the watcher if active
	if(autoUpdateWatcher !== null) {
		autoUpdateWatcher.close();
	}

}


/**
 * Generates the theme from the current color palette and overwrites the last one
 */
function generateColorThemes() {
	// Import colors from xrdb
	let colors: Color[] = new Array(16);
	try {
		for (let i = 0; i < colors.length; i++) {
			let resources: string = execSync("xrdb -n " + xresourcesColorsPath + " | grep 'color" + i.toString() + ":'").toString();
			let matches = resources.match(/#[a-f\d]{6}/gi);
			if (matches !== null) {
				colors[i] = Color(matches[0]);
			} else {
				throw Error;
			}
		}
	} catch(error) {
		vscode.window.showErrorMessage('Couldn\'t load colors from ' + xresourcesColorsPath || "(No path provided)" +', make sure all 16 colors are available');
		return;
	}
		
	// Generate the normal theme
	const colorTheme = template(colors, false);
	fs.writeFileSync(path.join(__dirname,'../themes/xresources.json'), JSON.stringify(colorTheme, null, 4));
	
	// Generate the bordered theme
	const colorThemeBordered = template(colors, true);
	fs.writeFileSync(path.join(__dirname,'../themes/xresources-bordered.json'), JSON.stringify(colorThemeBordered, null, 4));
}

/**
 * Automatically updates the theme when the color palette changes
 * @returns The watcher for the color palette
 */
function autoUpdate(): fs.FSWatcher | null {
	let fsWait = false;

	if (autoUpdateWatcher !== null) {
		autoUpdateWatcher.close();
	}

	// Watch for changes in the color palette of xresources
	if (xresourcesColorsPath !== undefined && xresourcesColorsPath !== "") {
		generateColorThemes();

		return fs.watch(xresourcesColorsPath, (event, filename) => {
			if (filename) {
				// Delay after a change is found
				if (fsWait) {
					return;
				}
				fsWait = true;
				setTimeout(() => {
					fsWait = false;
				}, 100);
		
				// Update the theme
				console.log("Generating themes");
				generateColorThemes();
			}
		});
    } else {return null;}
}