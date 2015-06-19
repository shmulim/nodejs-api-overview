var http = require('http');
var server = http.createServer(function(request, response){
	// read the request and write back the response
});

server.listen(8080, 'localhost');

// binding a listener directly to a newly created server
var http = require('http');
var server = http.createServer().listen(8080, 'localhost');
// server event handlers could be implemented here.
