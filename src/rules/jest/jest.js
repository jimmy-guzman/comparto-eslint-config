const { doesDependencyExist } = require('../../utils')
const testingLibrary = require('./testing-library')

const hasTestingLibrary = doesDependencyExist('@testing-library/react')

module.exports = {
  plugins: ['jest', ...(hasTestingLibrary ? testingLibrary.plugins : [])],
  env: { 'jest/globals': true },
  rules: {
    ...(hasTestingLibrary ? testingLibrary.rules : {}),
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'it' }],
    'jest/expect-expect': 'warn',
    'jest/lowercase-name': 'error',
    'jest/no-commented-out-tests': 'error',

    /**
     * Prevent calling `expect` conditionally
     * - https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md
     */
    'jest/no-conditional-expect': 'error',
    'jest/no-deprecated-functions': 'warn',
    'jest/no-disabled-tests': 'warn',

    /**
     * Avoid using a callback in asynchronous tests and hooks
     * - https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md
     */
    'jest/no-done-callback': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'error',

    /**
     * Disallow string interpolation inside snapshots
     * - https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md
     */
    'jest/no-interpolation-in-snapshots': 'error',
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
  },
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      rules: {
        'max-lines-per-function': 'off',
        'react/display-name': 'off'
      }
    }
  ]
}
