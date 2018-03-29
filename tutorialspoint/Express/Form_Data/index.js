var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();
var upload = multer();

app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); 									//for pasing json/app
app.use(bodyParser.urlencoded({extended: true})); 			//for paring application/x-www-form-urlenconded
app.use(express.static('public'));

app.post('/', function(req, res){
	console.log(req.body);
	res.send('received your request');
});

app.get('/', function(req, res){
	res.render('form');
});
app.listen(3000, function(){
	console.log('Server running...');
});