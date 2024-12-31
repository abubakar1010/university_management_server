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
		rules: {
			"no-unused-vars": "error",
			"no-console": "warn",
			"prefer-const": "error",
			"no-undef": "error",
		},
		ignores: ["node_modules", "dist"],
	},
];
