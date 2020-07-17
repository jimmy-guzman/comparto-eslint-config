const style = require('../src/rules/style')

describe('style.js', () => {
  it('should create default configuration', () => {
    expect(style).toMatchSnapshot()
  })

  it('should not have prettier rules', () => {
    expect(style.rules['prettier/prettier']).toBe('error')
  })
})
