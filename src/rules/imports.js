const { doesFileExist } = require('../utils')

module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-duplicates': 'error',
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
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
