// const http = require('http')
// const url = require('url');
// const fsHelpers = require('./helpers/fs')

const fs = require('fs');

// const app  = http.createServer((req, res) => {

//     const urlData = url.parse(req.url, {
//         query: true
//     })

//     const file = fsHelpers.readFileAndLog('./index.html')

//     // fs.appendFileSync('server-log.txt', 'Server Received Request To: ' + url + '\n')

//     res.end(file)
// })

// const port  = 5000;

// app.listen(port)

// app.on('listening', () => console.log('Server Running On Port ' + port))

console.log(process.argv);
const arg = process.argv;

// const action = arg[2];
// switch (action) {
// 	case 'createFile':
// 		const fileName = arg[3];
// 		const content = arg[4] ? arg[4] : '';
// 		fs.appendFileSync(fileName, content);
// 		break;
//     case 'initProject':
//         const rootPath = arg[3];

//         // => blog/css
//         const styleDirPath = rootPath + '/css';
//         // => blog/css/style.css
//         const styleFilePath = styleDirPath+'/style.css'
        
//         const jsDirPath = rootPath + '/js';
//         const jsFilePath = jsDirPath+'/main.js'

//         const imagesDirPath = rootPath + '/images'

//         const indexFilePath = rootPath + '/index.html'
//         const indexFileContent = '<html> <head <link rel="stylesheet" href="/css/style.css" /> ><head> <body> <script src="js/main.js" > </script> <body></html>'

//         fs.mkdirSync(rootPath);

//         fs.mkdirSync(styleDirPath)

//         fs.mkdirSync(jsDirPath)

//         fs.mkdirSync(imagesDirPath)

//         fs.writeFileSync(styleFilePath, '')
//         fs.writeFileSync(jsFilePath, '')
//         fs.writeFileSync(indexFilePath, indexFileContent)

// }

const folderExists = fs.existsSync('../session 3')
console.log(folderExists)


// folderName =>  folderPath
// wrap code within try catch
// if folder exists skip that process
// if folder not exists create that folder


