import js from '@eslint/js';
import globals from 'globals';
import node from 'eslint-plugin-node';
import security from 'eslint-plugin-security';

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      node,
      security,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...node.configs.recommended.rules,
      'security/detect-object-injection': 'warn',
      'security/detect-non-literal-require': 'warn',
      'security/detect-non-literal-fs-filename': 'warn',
      'no-console': 'off', 
      'no-unused-vars': ['warn', { argsIgnorePattern: 'next' }], 
      'node/no-unpublished-import': 'off', 
      'node/no-extraneous-require': 'off', 
    },
  },
];
