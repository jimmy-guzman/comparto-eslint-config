const fs = require('fs')

const rules = fs.readdirSync('./src/rules/').map(file => file.split('.')[0])

module.exports = {
  scopes: ['workspace', 'deps', 'release', 'all', ...rules],
  types: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci']
}
