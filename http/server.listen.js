var http = require('http');
var server = http.createServer(function(request, response){
	// read the request and write back the response
});

server.listen(8080, 'localhost');

// chaining the listener directly to the server object
var http = require('http');
var server = http.createServer().listen(8080, 'localhost');
// server event handlers could be implemented here.
