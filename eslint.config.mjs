import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		rule: {
			semi: ["error", "always"], // Enforce semicolons at the end of statements
			quotes: ["error", "double"], // Enforce double quotes for strings
			"no-console": "warn", // Warn on console logs
			eqeqeq: ["error", "always"], // Enforce strict equality (===)

			// TypeScript-specific rules
			"@typescript-eslint/no-unused-vars": "warn", // Warn on unused variables
			"@typescript-eslint/explicit-module-boundary-types": "warn", // Require explicit return types
			"@typescript-eslint/no-explicit-any": "warn", // Warn on usage of `any`
			"@typescript-eslint/explicit-function-return-type": "warn", // Enforce return type for functions

			// Node.js-specific rules
			"node/no-unpublished-import": "off", // Allow local imports
			"node/no-missing-import": "error", // Ensure all imports exist
			"node/exports-style": ["error", "module.exports"], // Consistent export style
		},
	},
];
