module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'object-curly-newline': ['error', { 'multiline': true, 'minProperties': 10 }],
    'implicit-arrow-linebreak': 'off',
    'arrow-body-style': 'off',
  },
};
