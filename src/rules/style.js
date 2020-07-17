module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:jest/style'
  ],
  plugins: ['prettier', 'jest'],
  rules: { 'prettier/prettier': 'error' }
}
