const errors = require('../../src/rules/errors')

test('errors.js', () => {
  expect(errors).toMatchSnapshot()
})
