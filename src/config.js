const { doesDepExist } = require('./utils')

module.exports = {
  hasJest: doesDepExist('jest'),
  hasJestDom: doesDepExist('@testing-library/jest-dom'),
  hasReact: doesDepExist('react'),
  hasTestingLibrary: doesDepExist('@testing-library/react'),
  hasTypescript: doesDepExist('typescript')
}
