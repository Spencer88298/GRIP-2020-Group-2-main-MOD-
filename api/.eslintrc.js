/* eslint-disable max-len */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'google', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }]
  }
};
