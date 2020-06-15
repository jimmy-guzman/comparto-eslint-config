const test = require('ava')
const react = require('../rules/react')

test('react.js', t => {
  t.snapshot(react, 'eslint react configuration')
})
