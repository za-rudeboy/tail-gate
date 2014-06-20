var Tail = require('tail').Tail;

module.exports = function (file, callback){
	
		var tail = new Tail(file);
		tail.on("line", callback);
		
};
