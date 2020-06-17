const fs = require('fs')
const path = require('path')

function doesFileExist(file) {
  return fs.existsSync(path.join(process.cwd(), file))
}

module.exports = { doesFileExist }
