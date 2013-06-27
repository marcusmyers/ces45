
var express = require('express'),
 	port = 3000,
	http = require('http');

// create static server for decks
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || port);

var server = http.createServer(app).listen(app.get('port'),function(){
	console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
var clients = {};
io.sockets.on('connection', function(socket){
	clients[socket.id] = socket;
	

	socket.on('message', function(message){
		console.log('Receivied data from client');
		io.sockets.emit('pres', message);
	});

	socket.on('video', function(message){
		io.sockets.emit(message, "play");
	});

	//console.log('All connected clients: ', clients);

});
