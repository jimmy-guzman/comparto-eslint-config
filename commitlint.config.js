const fs = require('fs')

const gitCzConfig = require('./changelog.config')

const rules = fs.readdirSync('./src/rules/').map(file => file.split('.')[0])
const scopes = ['workspace', 'all', 'release', ...rules]
const types = Object.keys(gitCzConfig.types)

module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 64],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', scopes],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types]
  }
}
