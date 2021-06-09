module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    'extends': [
      'eslint:recommended',
      '@vue/typescript/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      '@typescript-eslint/no-explicit-any': [
        'off'
      ],
      '@typescript-eslint/explicit-module-boundary-types': [
        'off'
      ]
    }
  }
  