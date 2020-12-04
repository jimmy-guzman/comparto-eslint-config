const testingLibrary = require('../../src/rules/jest/testing-library')

describe('jest', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('should have default jest rules', () => {
    const jestRules = require('../../src/rules/jest')

    expect(jestRules).toMatchSnapshot()
  })

  it('should also include testing-library rules', () => {
    jest.doMock('../../src/utils', () => ({
      doesDependencyExist: () => true
    }))
    const jestRules = require('../../src/rules/jest')

    expect(jestRules.plugins).toStrictEqual(['jest', 'testing-library'])
    expect(jestRules.rules).toEqual(
      expect.objectContaining(testingLibrary.rules)
    )
  })
})
