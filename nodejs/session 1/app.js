const http = require('http');
const fs = require('fs');
const fsHelpers = require('../session 2/helpers/fs')



// fsHelpers.readFileAndLog()
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

const todos = [
	{
		userId: 1,
		id: 1,
		title: 'delectus aut autem',
		completed: false,
	},
	{
		userId: 1,
		id: 2,
		title: 'quis ut nam facilis et officia qui',
		completed: false,
	},
	{
		userId: 1,
		id: 3,
		title: 'fugiat veniam minus',
		completed: false,
	},
	{
		userId: 1,
		id: 4,
		title: 'et porro tempora',
		completed: true,
	},
	{
		userId: 1,
		id: 5,
		title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
		completed: false,
	},
	{
		userId: 1,
		id: 6,
		title: 'qui ullam ratione quibusdam voluptatem quia omnis',
		completed: false,
	},
	{
		userId: 1,
		id: 7,
		title: 'illo expedita consequatur quia in',
		completed: false,
	},
	{
		userId: 1,
		id: 8,
		title: 'quo adipisci enim quam ut ab',
		completed: true,
	},
	{
		userId: 1,
		id: 9,
		title: 'molestiae perspiciatis ipsa',
		completed: false,
	},
	{
		userId: 1,
		id: 10,
		title: 'illo est ratione doloremque quia maiores aut',
		completed: true,
	},
];

const server = http.createServer((req, res) => {
	const url = req.url;
	let data = '';

	if (url == '/') {
		// data = 'Home Page From Server'
		data = fs.readFileSync('./pages/index.html');
	} else if (url == '/about') {
		data = fs.readFileSync('./pages/about.html');
	} else if (url === '/script') {
		data = fs.readFileSync('./pages/main.js');
	} else if (url === '/todos') {
		data = JSON.stringify(todos);
		// console.log(data)
		// console.log(JSON.parse(data))
	} else if (url === '/todoapp') {
        data = fs.readFileSync('./todoapp/index.html')
		fs.appendFileSync('server-log.txt', 'Server Received Request To: ' + url + '\n')
    } else if (url === '/todoapp-script.js') {
        data = fs.readFileSync('./todoapp/app.js')
		
    } else {
		data = fs.readFileSync('./pages/404.html');
		fs.appendFileSync('server-log.txt', 'Server Received Request To: ' + url + ' But not Found' + '\n')
	}

	res.end(data);
	
});

server.listen(3005);
server.on('listening', () => console.log('Server Is Running On Port 3005'));
