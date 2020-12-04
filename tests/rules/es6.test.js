const es6 = require('../../src/rules/es6')

test('es6 rules', () => {
  expect(es6).toMatchSnapshot()
})
