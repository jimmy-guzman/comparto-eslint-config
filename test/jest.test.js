const test = require('ava')
const jest = require('../rules/jest')

test('jest.js', t => {
  t.snapshot(jest, 'eslint jest configuration')
})
