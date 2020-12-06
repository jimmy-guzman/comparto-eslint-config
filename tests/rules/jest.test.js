const testingLibrary = require('../../src/rules/jest/testing-library')
const jestDom = require('../../src/rules/jest/jest-dom')

describe('jest', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  it('should have default jest rules', () => {
    const jestRules = require('../../src/rules/jest')

    expect(jestRules).toMatchSnapshot()
  })

  it('should also include testing-library & jest-dom rules', () => {
    jest.doMock('../../src/utils', () => ({
      doesDependencyExist: () => true
    }))
    const jestRules = require('../../src/rules/jest')

    expect(jestRules.plugins).toStrictEqual([
      'jest',
      'testing-library',
      'jest-dom'
    ])
    expect(jestRules.rules).toEqual(
      expect.objectContaining(testingLibrary.rules),
      expect.objectContaining(jestDom.rules)
    )
  })
})
