const http = require('http')
const fs = require('fs')


// fs.mkdir('test2/aka', (err) => {
//     if (err) {console.log('Error Found')}
// })


// try {
//     fs.mkdirSync('test2/aka')
// } catch(err) {
//     console.log(err)
// }

// fs.writeFileSync('test/notes.txt', 'Hello From Node js')

// fs.writeFileSync('test/notes.txt', 'Hellooooooooooo')


// fs.appendFileSync('test/notes.txt', ' Hello Again')
// fs.appendFileSync('test/notes.txt', ' My Name Is Bla')

// fs.appendFileSync('test/notes2.txt', ' My Name Is Bla')



const server = http.createServer((req, res) => {

    const url = req.url;
    let data = ''

    if (url == '/') {
        // data = 'Home Page From Server'
        data = fs.readFileSync('./pages/index.html')
    } else if (url == '/about') {
        data = fs.readFileSync('./pages/about.html')
    } else if (url === '/script') {
        data = fs.readFileSync('./pages/main.js')
    } else {
        data = fs.readFileSync('./pages/404.html')
    }

    res.end(data)

})


server.listen(3000)
server.on('listening', () => console.log('Server Is Running On Port 3000'))