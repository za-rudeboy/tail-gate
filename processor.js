var fileTailer = require('./fileTailer');
var server = require('./server');

console.log('Watching the file: ' + process.argv[2]);

var pushToBrowserCallback = function (data){
	console.log(data);
	server.pushDataToBrowser('line', data);
};




fileTailer(process.argv[2], pushToBrowserCallback);

server.startServer();
