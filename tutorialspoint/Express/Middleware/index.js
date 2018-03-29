var express = require('express');
var app = express();

/* //Middleware function to log request protocol
app.use('/', function(req, res, next){									/*this middleware functoin is called for every request on / and sub routes. 			
	console.log('A request for this received at: ' + Date.now());				and after req you will get the date in cmd and browser that is handled by get
	next();
});

//route handler that sends res
app.get('/', function(req, res){
	res.send('a req at: ' + Date.now())
}); */

app.use('/', function(req, res, next){					//Here you can see the order
	console.log('Start: ' + Date.now());
	next();
});

app.get('/',function(req, res, next){					//Its top to bottom
	res.send('Middle: ' + Date.now());					
	next();
});

app.use('/', function(req, res, next){					//look at the time in cmd and browser. you can see which one is executed first
	console.log('End  : ' + Date.now());
});

app.listen(3000);
console.log('Server running...');