const testingLibrary = require('../../src/rules/jest/testing-library')

test('testing-library rules', () => {
  expect(testingLibrary).toMatchSnapshot()
})
