var http = require('http');
var server = http.createServer(function(request, response){
	// read the request and write back the response
});

server.listen(8080, 'localhost');

// chaining listener to server directly to server object
var http = require('http');
var server = http.createServer().listen(8080, 'localhost');
// implement server event handlers here.
