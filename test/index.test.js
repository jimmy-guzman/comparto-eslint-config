const test = require('ava')
const index = require('../index')

test('index.js', t => {
  const expectedRules = ['base', 'react', 'typescript', 'style', 'jest']

  t.deepEqual(index, {
    extends: expectedRules.map(
      expectedRule => `${process.cwd()}/rules/${expectedRule}.js`
    ),
    rules: {}
  })
})
