const test = require('ava')
const typescript = require('../rules/typescript')

test('typescript.js', t => {
  t.snapshot(typescript, 'eslint typescript configuration')
})
