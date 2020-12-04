const errors = require('../../src/rules/errors')

test('errors rules', () => {
  expect(errors).toMatchSnapshot()
})
