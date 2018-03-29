cd//requireing frameworks and parsers and setting them to vars
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var upload = multer();

//seting templating engine
app.set('view engine', 'pug');
app.set('views', './views');

//enabeling cookies and sessions
app.use(cookieParser());
app.use(session({secret: 'Shh, its a secret!'}));

//making static dir
app.use(express.static('public'));

//parsing data and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//setting database make sure its running in the background
mongoose.connect('mongodb://127.0.0.1:27017/my_db');

//making a model for database needs to happen before routes
var personSchema = mongoose.Schema({
  name: String,
  age: Number,
  nationality: String
});

var Person = mongoose.model("Person", personSchema);

//defining main route
app.get("/", function(req, res){
  res.render('index', {
    name: "Susan",
    url: "https://google.com"
    });
});

//counter for how many times you visited the page
//making use of a cookie id and sessions
app.get('/counter/views', function(req, res){
  if(req.session.page_views){
    req.session.page_views++;
    res.send('You visited this page ' +req.session.page_views+ ' times');
  }else{
    req.session.page_views = 1;
    res.send('Welcome to this page for the first time!');
  }
});

app.get('/cookie', function(req, res){
  //setting cookie check in browser with "console.log(document.cookie);"
  res.cookie('name', 'express').send('cookie set');
});

//Error page for 404 not found
app.get('*', function(req, res){
  res.render('error');
});

//setting up server on localhost and logging
app.listen(3000, function(){
  console.log('Server running...');
});
