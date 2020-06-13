const test = require('ava')
const jest = require('./jest')

test('jest.js', t => {
  t.snapshot(jest, 'eslint jest configuration')
})
