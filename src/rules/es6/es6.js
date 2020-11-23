module.exports = {
  plugins: ['babel'],
  rules: {
    'babel/camelcase': ['error', { properties: 'always' }],
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true
      }
    ],
    'babel/no-invalid-this': 'error',
    'babel/no-unused-expressions': 'error',
    'babel/object-curly-spacing': 'off',
    'babel/quotes': 'off',
    'babel/semi': 'off',
    'babel/valid-typeof': 'error',
    'no-duplicate-imports': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'properties'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'sort-imports': 'off',
    'symbol-description': 'error'
  }
}
