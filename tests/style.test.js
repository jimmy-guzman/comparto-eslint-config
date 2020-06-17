const style = require('../src/rules/style')

test('style.js', () => {
  expect(style).toMatchSnapshot()
})
