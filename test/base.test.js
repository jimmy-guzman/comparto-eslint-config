const test = require('ava')
const base = require('../rules/base')

test('base.js', t => {
  t.snapshot(base, 'eslint base configuration')
})
