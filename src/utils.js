const fs = require('fs')
const path = require('path')
const readPkgUp = require('read-pkg-up')

function doesFileExist(file) {
  return fs.existsSync(path.join(process.cwd(), file))
}

function doesDepExist(dep) {
  const { packageJson } = readPkgUp.sync({ normalize: true })
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies
  })

  return allDeps.includes(dep)
}

module.exports = { doesFileExist, doesDepExist }
