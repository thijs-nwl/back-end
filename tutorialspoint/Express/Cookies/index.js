var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/', function(req, res){
  res.cookie('name', 'express').send('cookie set');   //to check go to browser console and enter console.log(document.cookie)
  res.cookie("name", 'value', {maxAge: 360000});
  console.log('Cookies: ', req.cookies);              //now the browser sends back cookies
});


//TO clear a cookie named foo
app.get('/clear', function(req, res){
  clearCookie('foo');
  res.send('cookie foo cleared');
});

app.listen(3000, function(){
  console.log('Server running...');
});
