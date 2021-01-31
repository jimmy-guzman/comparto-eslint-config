const defaultRuleSets = [
  'base',
  'imports',
  'practices',
  'es6',
  'errors',
  'style'
]

function shouldHaveRules(ruleSets) {
  expect(require('../src/')).toEqual({
    extends: ruleSets.map(
      expectedRule => `${process.cwd()}/src/rules/${expectedRule}/index.js`
    ),
    rules: {}
  })
}

function mockConfig(config = {}) {
  const _config = {
    hasJest: false,
    hasReact: false,
    hasTypescript: false,
    ...config
  }

  jest.doMock('../src/config', () => _config)
}

describe('rule sets', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should have all the rules', () => {
    mockConfig({ hasJest: true, hasReact: true, hasTypescript: true })

    shouldHaveRules([...defaultRuleSets, 'react', 'typescript', 'jest'])
  })

  it('should only have default rules', () => {
    mockConfig()

    shouldHaveRules(defaultRuleSets)
  })
})
