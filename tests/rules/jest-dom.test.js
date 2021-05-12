const jestDom = require('../../src/rules/jest-dom')

test('testing-library rules', () => {
  expect(jestDom).toMatchSnapshot()
})
