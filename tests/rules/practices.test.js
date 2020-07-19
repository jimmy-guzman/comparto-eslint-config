const practices = require('../../src/rules/practices')

test('practices.js', () => {
  expect(practices).toMatchSnapshot()
})
