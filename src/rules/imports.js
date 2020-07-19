const { doesFileExist } = require('../utils')

module.exports = {
  plugins: ['import'],
  rules: {
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': [
      'error',
      { esmodule: true, commonjs: true, amd: false }
    ],
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/order': [
      'error',
      {
        'groups': [['builtin', 'external', 'internal']],
        'newlines-between': 'always'
      }
    ]
  },
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/ignore': ['node_modules'],
    'import/resolver': {
      webpack: {
        config: doesFileExist('webpack.config.js') ? 'webpack.config.js' : {}
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      }
    }
  }
}
