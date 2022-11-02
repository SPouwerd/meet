module.exports = {
  'extends': [
  ],
  'plugins': ['import', 'vue'],

  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2020,
    'ecmaFeatures': {
      'jsx': true,
    },
  },

  'rules': {
    'vue/prefer-template': ['error'],
    'require-jsdoc': ['off'],
    'no-unused-vars': ['off'],
    'no-unused-vars': 'off',
    'max-len': ['error', { 'code': 120 }],
    'indent': ['off'],
    'operator-linebreak': ['error', 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before',
      },
    }],
  },
}
