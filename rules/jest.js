module.exports = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-large-snapshots': [
      'warn',
      {
        maxSize: 60,
        inlineMaxSize: 6
      }
    ]
  }
}
