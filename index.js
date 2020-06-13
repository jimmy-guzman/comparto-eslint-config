const rulesDirectory = './rules'
const rulesSets = ['base', 'react', 'typescript', 'style']

module.exports = {
  extends: rulesSets.map(rulesSet =>
    require.resolve(`${rulesDirectory}/${rulesSet}`)
  ),
  rules: {}
}
