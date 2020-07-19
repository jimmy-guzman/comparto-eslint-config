const es6 = require('../../src/rules/es6')

test('es6.js', () => {
  expect(es6).toMatchSnapshot()
})
