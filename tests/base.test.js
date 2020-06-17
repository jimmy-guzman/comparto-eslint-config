const base = require('../src/rules/base')

test('base.js', () => {
  expect(base).toMatchSnapshot()
})
