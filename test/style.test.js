const test = require('ava')
const style = require('../rules/style')

test('style.js', t => {
  t.snapshot(style, 'eslint style configuration')
})
