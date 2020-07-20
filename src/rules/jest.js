module.exports = {
  plugins: ['jest'],
  env: { 'jest/globals': true },
  rules: {
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'it' }],
    'jest/expect-expect': 'warn',
    'jest/lowercase-name': 'error',
    'jest/no-commented-out-tests': 'error',
    'jest/no-deprecated-functions': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'error',
    'jest/no-jasmine-globals': 'warn',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': [
      'warn',
      {
        maxSize: 60,
        inlineMaxSize: 6
      }
    ],
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-matchers': 'off',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-callback': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'off',
    'jest/no-try-expect': 'error',
    'jest/prefer-called-with': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-spy-on': 'off',
    'jest/prefer-strict-equal': 'off',
    'jest/prefer-todo': 'warn',
    'jest/require-to-throw-message': 'off',
    'jest/require-top-level-describe': 'off',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-title': 'error'
  }
}
