module.exports = {
  plugins: ['testing-library'],
  rules: {
    /**
     * Enforce async queries to have proper await
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/await-async-query.md
     */
    'testing-library/await-async-query': 'error',
    /**
     * Enforce async utils to be awaited properly
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/await-async-utils.md
     */
    'testing-library/await-async-utils': 'error',
    /**
     * Enforce async fire event methods to be awaited
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/await-fire-event.md
     * - this rule only applies to `vue`
     */
    'testing-library/await-fire-event': 'off',
    /**
     * Enforces consistent naming for the data-testid attribute
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/consistent-data-testid.md
     */
    'testing-library/consistent-data-testid': 'off',
    /**
     * Disallow unnecessary await for sync events
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-await-sync-events.md
     */
    'testing-library/no-await-sync-events': 'error',
    /**
     * Disallow unnecessary await for sync queries
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-await-sync-query.md
     */
    'testing-library/no-await-sync-query': 'error',
    /**
     * Disallow the use of debug
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-debug.md
     */
    'testing-library/no-debug': 'warn',
    /**
     * Disallow importing from DOM Testing Library
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-dom-import.md
     * - fixable
     */
    'testing-library/no-dom-import': ['error', 'react'],
    /**
     * Disallow the use of cleanup
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-manual-cleanup.md
     */
    'testing-library/no-manual-cleanup': 'warn',
    /**
     * Disallow the use of render in setup functions
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-render-in-setup.md
     */
    'testing-library/no-render-in-setup': 'off',
    /**
     * Empty callbacks inside waitFor and waitForElementToBeRemoved are not preferred
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-wait-for-empty-callback.md
     */
    'testing-library/no-wait-for-empty-callback': 'error',
    /**
     * Ensures no snapshot is generated inside of a wait call
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/no-wait-for-snapshot.md
     */
    'testing-library/no-wait-for-snapshot': 'warn',
    /**
     * Suggest using explicit assertions rather than just getBy* queries
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-explicit-assert.md
     */
    'testing-library/prefer-explicit-assert': 'error',
    /**
     * Suggest using findBy* methods instead of the waitFor + getBy queries
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-find-by.md
     * - fixable
     */
    'testing-library/prefer-find-by': 'error',
    /**
     * Enforce specific queries when checking element is present or not
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-presence-queries.md
     */
    'testing-library/prefer-presence-queries': 'error',
    /**
     * Suggest using screen while using queries
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-screen-queries.md
     */
    'testing-library/prefer-screen-queries': 'off',
    /**
     * Use waitFor instead of deprecated wait methods
     * - https://github.com/testing-library/eslint-plugin-testing-library/blob/master/docs/rules/prefer-wait-for.md
     * - fixable
     */
    'testing-library/prefer-wait-for': 'error'
  }
}
