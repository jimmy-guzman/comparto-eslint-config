const index = require('../src/')

test('index.js', () => {
  const expectedRules = [
    'base',
    'imports',
    'practices',
    'es6',
    'errors',
    'style',
    'react',
    'typescript',
    'jest'
  ]

  expect(index).toEqual({
    extends: expectedRules.map(
      expectedRule => `${process.cwd()}/src/rules/${expectedRule}.js`
    ),
    rules: {}
  })
})
