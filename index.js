const fs = require('fs')
const glob = require('glob')

glob('node/lib/internal/**/*', (err, files) => {
  if (err) {
    console.error(err)
  } else {
    var list = JSON.stringify(files, null, 2)
                  .replace(/"/g, '\'')
                  .replace(/node\/lib\/internal\//g, '')
    fs.writeFileSync('file-list.js', list)
    console.log(list)
  }
})
