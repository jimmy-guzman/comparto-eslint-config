const jest = require('../src/rules/jest')
const testingLibrary = require('../src/rules/jest/testing-library')
const base = require('../src')

module.exports = {
  extends: base.extends,
  ...jest,
  plugins: [...jest.plugins, ...testingLibrary.plugins],
  rules: {
    ...jest.rules,
    ...testingLibrary.rules
  }
}
