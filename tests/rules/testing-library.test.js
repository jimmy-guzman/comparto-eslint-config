const testingLibrary = require('../../src/rules/testing-library')

test('testing-library rules', () => {
  expect(testingLibrary).toMatchSnapshot()
})
