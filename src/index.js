const rulesDirectory = './rules'
const rulesSets = [
  'base',
  'imports',
  'react',
  'typescript',
  'style',
  'jest',
  'practices',
  'es6'
]

module.exports = {
  extends: rulesSets.map(rulesSet =>
    require.resolve(`${rulesDirectory}/${rulesSet}`)
  ),
  rules: {}
}
