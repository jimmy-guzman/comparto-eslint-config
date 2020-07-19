module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jest/style'
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': [
      'error',
      {
        allowArrayEnd: false,
        allowArrayStart: true,
        allowObjectEnd: false,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: true
      }
    ],

    // https://eslint.org/docs/rules/no-nested-ternary (fixable)
    'no-nested-ternary': 'error',

    // https://eslint.org/docs/rules/no-unneeded-ternary (fixable)
    'no-unneeded-ternary': 'error',

    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    'prettier/prettier': 'error',

    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: false, minKeys: 5 }
    ],

    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error'
  }
}
