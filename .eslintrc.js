module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: 'module' },
  ignorePatterns: ['node_modules/*'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        'react/jsx-no-target-blank': 0,
        'no-restricted-imports': [
          'error',
          {
            name: 'reselect',
            message: 'Please use `@service` instead.',
          },
          {
            name: 'react-redux',
            message: 'Please use `@service` instead.',
          },
          {
            name: 'redux-injectors',
            message: 'Please use `@service` instead.',
          },
          {
            name: '@reduxjs/toolkit',
            message: 'Please use `@service` instead.',
          },
          {
            name: 'redux-saga',
            message: 'Please use `@repository` instead.',
          },
          {
            name: 'redux-saga/effects',
            message: 'Please use `@repository` instead.',
          },
          {
            name: 'react-intl',
            message: 'Please use `@translations` instead.',
          },
          {
            name: '@reactoso-intl',
            message: 'Please use `@translations` instead.',
          },
          {
            name: '@reactoso-redux',
            message: 'Please use `@service` instead.',
          },
          {
            name: '@reactoso-saga',
            message: 'Please use `@repository` instead.',
          }
        ],
        'linebreak-style': ['error', 'unix'],
        'react/prop-types': 'off',

        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',

        'react/react-in-jsx-scope': 'off',

        'jsx-a11y/anchor-is-valid': 'off',

        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-empty-interface': ['warn'],
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],

        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      },
    },
  ],
};
