const base = require('../../src/rules/base')

test('base rules', () => {
  expect(base).toMatchSnapshot()
})
