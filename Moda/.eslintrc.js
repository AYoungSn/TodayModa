module.exports = {
	'env': {
		'es6': true,
		'node': true,
		'jest': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module',
		'project': './tsconfig.json',
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'react-hooks'
	],
	'rules': {
		'indent': [
			'error',
			'tab',
			{ SwitchCase: 1 }
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single',
			{ avoidEscape: true }
		],
		'semi': [
			'error',
			'always'
		],
		'no-empty-function':'off',
		'@typescript-eslint/no-empty-function': 'off',
		'react/display-name':'off',
		'react/prop-types':'off',
	},
	'settings':{
		react:{
			version: 'detect',
		},
	},
};
