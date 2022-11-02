module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  plugins: ['import', 'vue'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'vue/prefer-template': ['error'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/attribute-hyphenation': 0,
    'vue/multi-word-component-names': 0,
    'require-jsdoc': ['off'],
    'no-unused-vars': ['off'],
    'max-len': ['error', { code: 90 }],
    indent: ['off'],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  globals: {
    $nuxt: true,
  },
}
