var express = require('express');		/*express gebruiken en als app declareren*/
var app = express();

app.get('/', function(req,res){			/*wanneer er en req binnen komt op port:3000 dan res met hello world!*/
	res.send("hello world!");
});

app.listen(3000);
console.log("Server running...");		/*te zien in cmd*/