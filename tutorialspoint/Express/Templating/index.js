var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views')

 app.get('/', function(req, res){			//pug file from views map rendered on /
	res.render('first_view');
}); 

app.get('/dynamic_view', function(req, res){
	res.render('dynamic', {
			name:"TutorialsPoint",
			url:"http://www.tutrialspoint.com"
	});
});

app.get('/signUp', function(req, res){
	res.render('Conditionals', {user: 
		{
			name:"Thijs",
			age:"15"
		}
	})
});

app.get('/components', function(req, res){
	res.render('Content');
});

app.get('*', function(req, res){
	res.render('Error');
});

app.listen(3000, function(){
	console.log('Server running...');
});
