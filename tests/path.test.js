const paths = require('../src/paths')

describe('paths.js', () => {
  it('should have all paths', () => {
    expect(paths).toEqual(
      expect.objectContaining({
        tsConfigPath: `${process.cwd()}/tsconfig.json`
      })
    )
  })
  it('should return tsConfigPath', () => {
    expect(paths.tsConfigPath).toBe(`${process.cwd()}/tsconfig.json`)
  })
})
