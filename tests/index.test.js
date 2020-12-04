const defaultRuleSets = [
  'base',
  'imports',
  'practices',
  'es6',
  'errors',
  'style',
  'react',
  'typescript',
  'jest'
]

describe('rule sets', () => {
  it('should have all the rules', () => {
    const index = require('../src/')

    expect(index).toEqual({
      extends: defaultRuleSets.map(
        expectedRule => `${process.cwd()}/src/rules/${expectedRule}/index.js`
      ),
      rules: {}
    })
  })
})
