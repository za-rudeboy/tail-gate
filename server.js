var http = require('http');
var fs = require('fs');

var io;

function startServer(){
	
	var server = http.createServer(function(request, response){

	fs.readFile(__dirname + '/index.html', 'utf8', function(err, data){
		if (err){
			response.writeHead(500);
			return response.end("A serious error occured");
		}
		
			response.writeHead(200);
			response.write(data, 'utf8');
			response.end();
		});
	
	});

	server.listen(7001);
	
	io = require('socket.io')(server);
	
	console.log('Listening for events on localhost port 7001');

}

function pushDataToBrowser(eventName, eventData){
	io.sockets.emit(eventName, eventData);
}


exports.startServer = startServer;
exports.pushDataToBrowser = pushDataToBrowser;



