const { hasJest, hasReact, hasTypescript } = require('./config')

const rulesDirectory = './rules'
const rulesSets = [
  'base',
  'imports',
  'practices',
  'es6',
  'errors',
  'style',
  hasReact && 'react',
  hasTypescript && 'typescript',
  hasJest && 'jest'
].filter(Boolean)

module.exports = {
  extends: rulesSets.map(rulesSet =>
    require.resolve(`${rulesDirectory}/${rulesSet}`)
  ),
  rules: {}
}
