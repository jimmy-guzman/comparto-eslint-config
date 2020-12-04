const practices = require('../../src/rules/practices')

test('practices rules', () => {
  expect(practices).toMatchSnapshot()
})
