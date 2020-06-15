module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/expect-expect': 'warn',
    'jest/no-commented-out-tests': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-mocks-import': 'error',
    'jest/no-jasmine-globals': 'warn',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-callback': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-try-expect': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/no-large-snapshots': [
      'warn',
      {
        maxSize: 60,
        inlineMaxSize: 6
      }
    ]
  }
}
