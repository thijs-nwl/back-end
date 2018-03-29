var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/static', function(req, res){
	res.render('staticTest');
});

app.listen(3000, function(){
	console.log("Server running...");
});