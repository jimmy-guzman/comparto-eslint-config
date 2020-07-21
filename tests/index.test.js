const index = require('../src/')

test('index.js', () => {
  const expectedRules = [
    'base',
    'imports',
    'react',
    'typescript',
    'style',
    'jest',
    'practices',
    'es6',
    'errors'
  ]

  expect(index).toEqual({
    extends: expectedRules.map(
      expectedRule => `${process.cwd()}/src/rules/${expectedRule}.js`
    ),
    rules: {}
  })
})
