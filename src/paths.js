const path = require('path')

module.exports = {
  tsConfigPath: () => path.join(process.cwd(), './tsconfig.json')
}
