var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    const text = url.parse(req.url).pathname;
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	res.end(`${text}\n`);
}).listen(3456);
console.log('Server running at http://localhost:3456/');