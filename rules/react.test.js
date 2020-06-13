const test = require('ava')
const react = require('./react')

test('react.js', t => {
  t.snapshot(react, 'eslint react configuration')
})
