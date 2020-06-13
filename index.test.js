const test = require('ava')
const index = require('./index')

test('index.js', t => {
  t.deepEqual(index, {
    extends: [
      `${process.cwd()}/rules/base.js`,
      `${process.cwd()}/rules/react.js`,
      `${process.cwd()}/rules/typescript.js`,
      `${process.cwd()}/rules/style.js`
    ],
    rules: {}
  })
})
