const setupDoesFileExist = value => {
  jest.doMock('fs', () => ({ existsSync: () => value }))
  const { doesFileExist } = require('../src/utils')

  return doesFileExist('./some-file')
}

describe('doesFileExist()', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should return true if file exists', () => {
    expect(setupDoesFileExist(true)).toBeTruthy()
  })
  it('should return false if file doest not exist', () => {
    expect(setupDoesFileExist(false)).toBeFalsy()
  })
})
