const jestDom = require('../../src/rules/jest/jest-dom')

test('testing-library rules', () => {
  expect(jestDom).toMatchSnapshot()
})
