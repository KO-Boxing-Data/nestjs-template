module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double",
			{
				"avoidEscape": true
			}
		],
		"semi": [
			"error",
			"always"
		],
		"no-trailing-spaces": [
			"error",
			{
				"ignoreComments": true
			}
		],
		"max-len": [
			"error",
			{
				"code": 120,
				"tabWidth": 4
			}
		],
		"newline-per-chained-call": [
			"error",
			{
				"ignoreChainWithDepth": 3
			}
		],
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/no-inferrable-types": "off"
	}
};