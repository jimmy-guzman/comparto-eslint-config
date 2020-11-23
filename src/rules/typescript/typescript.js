const { tsConfigPath } = require('../../paths')
const conflictingEslintRules = require('./overrides')
const namingConventions = require('./naming')

module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: tsConfigPath },
      plugins: ['@typescript-eslint'],
      rules: {
        ...conflictingEslintRules,
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        /**
         * Enforces naming conventions for everything across a codebase
         * - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
         */
        '@typescript-eslint/naming-convention': ['error', ...namingConventions],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        /**
         * Disallow variable declarations from shadowing variables declared in the outer scope
         * - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
         */
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/triple-slash-reference': 'error'
      }
    }
  ]
}
