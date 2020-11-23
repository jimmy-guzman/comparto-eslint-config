module.exports = [
  {
    selector: 'default',
    format: ['camelCase']
  },
  {
    selector: 'variable',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE']
  },
  {
    selector: 'variable',
    types: ['boolean'],
    format: ['PascalCase'],
    prefix: ['is', 'should', 'has', 'can', 'did', 'will']
  },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase']
  },
  {
    selector: 'parameter',
    format: ['camelCase'],
    leadingUnderscore: 'allow'
  },
  {
    selector: 'typeLike',
    format: ['PascalCase']
  },
  {
    selector: 'enum',
    format: ['PascalCase', 'UPPER_CASE']
  },
  {
    selector: 'enumMember',
    format: ['PascalCase', 'UPPER_CASE']
  },
  {
    selector: 'interface',
    format: ['PascalCase'],
    custom: {
      regex: '^I[A-Z]',
      match: false
    }
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'require'
  },
  {
    selector: 'property',
    types: ['boolean', 'string'],
    format: null
  },
  {
    selector: 'method',
    format: ['camelCase', 'PascalCase']
  }
]
