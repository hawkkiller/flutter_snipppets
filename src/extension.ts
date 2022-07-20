import { commands, ExtensionContext, languages } from 'vscode';
import { SnippetsCodeActionProvider } from './code-actions';
import { wrapWithTest } from './commands';

const DART_MODE = { language: "dart", scheme: "file" };

export function activate(context: ExtensionContext) {
	context.subscriptions.push(
		commands.registerCommand("extension.wrap-konstantin",
			wrapWithTest,
		),
		languages.registerCodeActionsProvider(
			DART_MODE,
			new SnippetsCodeActionProvider()
		),
	);
}
