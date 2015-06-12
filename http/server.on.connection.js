var http = require('http');
var server = http.createServer().listen(8080, 'localhost');

server.on('connection', function(){
	console.log('connected');
});

// connected
// connected

// outputs 'connected' twice because the browsers
// is making an additional request for the favicon
// http://stackoverflow.com/questions/25410139/nodejs-http-request-console-log-function-prints-twice
// http://stackoverflow.com/questions/17952436/node-js-double-console-log-output
