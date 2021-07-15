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
    'object-curly-newline': ['error', {'multiline': true, 'minProperties': 10}],
    'max-len': ['error', {'comments': 115, 'ignoreComments': true, 'ignoreTrailingComments': true, 'code': 100}],
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': 'off',
    'arrow-body-style': 'off',
    'no-unused-expressions': ['error', {'allowShortCircuit': true}],
  },
};
