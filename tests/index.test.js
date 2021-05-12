const defaultRuleSets = [
  'base',
  'imports',
  'practices',
  'es6',
  'errors',
  'style'
]

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

  it('should only have base rules', () => {
    mockConfig()

    expect(require('../src/')).toEqual({
      extends: defaultRuleSets.map(
        expectedRule => `${process.cwd()}/src/rules/${expectedRule}/index.js`
      ),
      rules: {}
    })
  })
})
