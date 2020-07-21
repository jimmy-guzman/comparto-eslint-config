module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jest/style'
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'camelcase': 'off', // revisit
    'capitalized-comments': 'off',
    'consistent-this': 'off',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': 'off',
    'id-denylist': ['error', 'data', 'err', 'e', 'cb', 'callback'],
    'id-length': 'off',
    'id-match': [
      // camelCase, PascalCase, __identifier, CONST_VALUE, stream$, $el
      'error',
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$'
    ],
    'init-declarations': 'off',
    'line-comment-position': 'off',
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
    'lines-between-class-members': 'off',
    'max-depth': ['error', 4],
    'max-lines': 'off',
    'max-lines-per-function': ['error', 100],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements': ['error', 40],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': 'off',
    'new-cap': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'one-var': 'off',
    'operator-assignment': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-spread': 'error',
    'prettier/prettier': 'error',
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: false, minKeys: 5 }
    ],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'spaced-comment': 'off'
  }
}
