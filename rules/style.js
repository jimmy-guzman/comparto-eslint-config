module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jest/style'
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 80,
        jsxSingleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'none',
        quoteProps: 'consistent'
      }
    ]
  }
}
