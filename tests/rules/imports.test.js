describe('imports.js', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should contain webpack.config.js if webpack is included', () => {
    jest.doMock('../../src/utils', () => ({ doesFileExist: () => true }))

    const imports = require('../../src/rules/imports')

    expect(imports.settings['import/resolver'].webpack.config).toBe(
      'webpack.config.js'
    )
  })

  it('should create default configuration', () => {
    jest.doMock('../../src/utils', () => ({ doesFileExist: () => false }))

    const imports = require('../../src/rules/imports')

    expect(imports).toMatchSnapshot()
  })
})
