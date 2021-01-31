const setupDoesFileExist = value => {
  jest.doMock('read-pkg-up', () => jest.fn())
  jest.doMock('fs', () => ({ existsSync: () => value }))

  const { doesFileExist } = require('../src/utils')

  return doesFileExist('./some-file')
}

const setupDoesDepExist = value => {
  jest.doMock('read-pkg-up', () => ({
    sync: () => ({
      packageJson: {
        devDependencies: {
          awesomeDep: '1.0.0'
        }
      }
    })
  }))

  const { doesDepExist } = require('../src/utils')

  return doesDepExist(value)
}

describe('utils', () => {
  beforeEach(() => {
    jest.resetModules()
  })
  describe('doesFileExist()', () => {
    it('should return true if file exists', () => {
      expect(setupDoesFileExist(true)).toBeTruthy()
    })
    it('should return false if file doest not exist', () => {
      expect(setupDoesFileExist(false)).toBeFalsy()
    })
  })
  describe('doesDepExist()', () => {
    it('should return true if dependency exists', () => {
      expect(setupDoesDepExist('awesomeDep')).toBeTruthy()
    })
    it('should return true if dependency does not exist', () => {
      expect(setupDoesDepExist('badDep')).toBeFalsy()
    })
  })
})
