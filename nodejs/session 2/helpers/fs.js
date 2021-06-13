const fs  = require('fs')

const readFileAndLog = (path, logMsg) => {
    if (!logMsg) logMsg = 'Try To Read File From ' + path + '\n' 
    const file = fs.readFileSync(path)
    fs.appendFileSync('server.log', logMsg)

    return file
}

module.exports = {
    readFileAndLog
}