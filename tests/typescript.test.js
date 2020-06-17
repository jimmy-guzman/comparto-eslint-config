const typescript = require('../src/rules/typescript')

test('typescript.js', () => {
  expect(typescript).toMatchSnapshot()
})
