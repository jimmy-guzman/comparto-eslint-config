const jest = require('../src/rules/jest')
const testingLibrary = require('../src/rules/testing-library')
const jestDom = require('../src/rules/jest-dom')
const base = require('../src')

module.exports = {
  extends: base.extends,
  ...jest,
  plugins: [...jest.plugins, ...testingLibrary.plugins, ...jestDom.plugins],
  rules: {
    ...jest.rules,
    ...testingLibrary.rules,
    ...jestDom.rules
  }
}
