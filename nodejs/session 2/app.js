const http = require('http')
const url = require('url');
const fsHelpers = require('./helpers/fs')




const app  = http.createServer((req, res) => {

    const urlData = url.parse(req.url, {
        query: true
    })

    const file = fsHelpers.readFileAndLog('./index.html')

    // fs.appendFileSync('server-log.txt', 'Server Received Request To: ' + url + '\n')

    res.end(file)
})

const port  = 5000;

app.listen(port)

app.on('listening', () => console.log('Server Running On Port ' + port))