describe('jest', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('should have default jest rules', () => {
    const jestRules = require('../../src/rules/jest')

    expect(jestRules).toMatchSnapshot()
  })
})
