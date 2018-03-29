var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
//Whenever someone connects this gets executed
io.on('connection', function(){
	console.log("A new user connected");
	
	socket.io('disconnect', function(){
		console.log("A user disconnected");
	});
});

http.listen(3000, function(){
	console.log('Server running...');
});