var http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    const text = url.parse(req.url);
    const message = text.pathname;
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end(`${message}\n`);
}).listen(3456);
console.log('Server running at http://localhost:3456/');