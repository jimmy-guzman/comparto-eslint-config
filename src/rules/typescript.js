const { tsConfigPath } = require('../paths')

const conflictingEslintRules = {
  'babel/camelcase': 'off',
  'camelcase': 'off',
  'constructor-super': 'off',
  'getter-return': 'off',
  'import/named': 'off',
  'no-array-constructor': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-empty-function': 'off',
  'no-extra-semi': 'off',
  'no-func-assign': 'off',
  'no-import-assign': 'off',
  'no-new-symbol': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-setter-return': 'off',
  'no-shadow': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'require-await': 'off',
  'valid-typeof': 'off'
}

const namingConventions = [
  {
    selector: 'default',
    format: ['camelCase']
  },
  {
    selector: 'variable',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE']
  },
  {
    selector: 'variable',
    types: ['boolean'],
    format: ['PascalCase'],
    prefix: ['is', 'should', 'has', 'can', 'did', 'will']
  },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase']
  },
  {
    selector: 'parameter',
    format: ['camelCase'],
    leadingUnderscore: 'allow'
  },
  {
    selector: 'typeLike',
    format: ['PascalCase']
  },
  {
    selector: 'enum',
    format: ['PascalCase', 'UPPER_CASE']
  },
  {
    selector: 'enumMember',
    format: ['PascalCase', 'UPPER_CASE']
  },
  {
    selector: 'interface',
    format: ['PascalCase'],
    custom: {
      regex: '^I[A-Z]',
      match: false
    }
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'require'
  },
  {
    selector: 'property',
    types: ['boolean', 'string'],
    format: null
  },
  {
    selector: 'method',
    format: ['camelCase', 'PascalCase']
  }
]

module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: tsConfigPath() },
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
