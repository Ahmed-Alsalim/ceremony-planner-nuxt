// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
  },
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'vue/multi-word-component-names': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
      ],
    }],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3,
      },
      'multiline': {
        'max': 3,
      },
    }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
  },
  overrides: [
    {
      files: ['server/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};