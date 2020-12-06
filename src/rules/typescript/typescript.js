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
        '@typescript-eslint/array-type': 'off', // fixable, revisit
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-tslint-comment': 'error', // fixable
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/class-literal-property-style': 'off', // fixable, revisit
        '@typescript-eslint/consistent-indexed-object-style': [
          'error',
          'record'
        ], // fixable
        '@typescript-eslint/consistent-type-assertions': 'off', // revisit
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface'
        ], // fixable
        '@typescript-eslint/consistent-type-imports': 'off', // fixable, revisit
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/dot-notation': 'error', // fixable,
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'off', // fixable, revisit
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/lines-between-class-members': 'off', // fixable, revisit,
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: {
              memberTypes: ['signature', 'method', 'constructor', 'field'],
              order: 'alphabetically'
            }
          }
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'], // fixable
        '@typescript-eslint/naming-convention': ['error', ...namingConventions],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-base-to-string': 'warn',
        '@typescript-eslint/no-confusing-non-null-assertion': 'off', //fixable
        '@typescript-eslint/no-confusing-void-expression': 'error', // fixable
        '@typescript-eslint/no-dupe-class-members': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error', // fixable
        '@typescript-eslint/no-empty-function': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-floating-promises': 'off', // revisits
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error', // fixable
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-invalid-void-type': 'warn',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // fixable
        '@typescript-eslint/no-unnecessary-condition': 'error', // fixable
        '@typescript-eslint/no-unnecessary-qualifier': 'error', // fixable
        '@typescript-eslint/no-unnecessary-type-arguments': 'error', // fixable
        '@typescript-eslint/no-unnecessary-type-assertion': 'error', // fixable
        '@typescript-eslint/no-unnecessary-type-constraint': 'error', // fixable
        '@typescript-eslint/no-unsafe-assignment': 'off', // revisit
        '@typescript-eslint/no-unsafe-call': 'off', // revisit
        '@typescript-eslint/no-unsafe-member-access': 'off', // revisit
        '@typescript-eslint/no-unsafe-return': 'off', // revisit
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error', // fixable
        '@typescript-eslint/prefer-includes': 'error', // fixable
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error', // fixable
        '@typescript-eslint/prefer-readonly-parameter-types': 'off', // revisit
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn', // fixable
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error', // fixable
        '@typescript-eslint/prefer-ts-expect-error': 'error', //fixable
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/require-array-sort-compare': 'off',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/return-await': 'error', // fixable
        '@typescript-eslint/strict-boolean-expressions': 'off', // revisit
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/typedef': 'off', // revisit
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unified-signatures': 'warn'
      }
    }
  ]
}
