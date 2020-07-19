const jestRules = require('../../src/rules/jest')

test('jest.js', () => {
  expect(jestRules).toMatchSnapshot()
})
