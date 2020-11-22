const typescript = require('../src/rules/typescript')
const base = require('../src')

// eslint-disable-next-line no-unused-vars
const { files, ...withoutOverrides } = { ...typescript.overrides[0] }

module.exports = { extends: base.extends, ...withoutOverrides }
