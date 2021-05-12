const rulesDirectory = './src/rules'
const rulesSets = [
  'base',
  'imports',
  'practices',
  'es6',
  'errors',
  'style',
  'react',
  'typescript',
  'jest'
].filter(Boolean)

module.exports = {
  extends: rulesSets.map(rulesSet =>
    require.resolve(`${rulesDirectory}/${rulesSet}`)
  ),
  rules: {}
}
