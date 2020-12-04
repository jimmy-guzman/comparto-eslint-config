const typescript = require('../../src/rules/typescript')

jest.mock('../../src/paths', () => ({
  tsConfigPath: 'mock-tsconfig-path'
}))

describe('typescript rules', () => {
  it('should create default configuration', () => {
    expect(typescript).toMatchSnapshot()
  })
  it('should have parserOptions.project set correctly', () => {
    const parserOptions = typescript.overrides[0].parserOptions

    expect(parserOptions.project).toBe('mock-tsconfig-path')
  })
})
