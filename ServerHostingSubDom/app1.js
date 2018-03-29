var express = require('express');
var app = express();
var port = 8011;

app.get('/', function(req, res){
  console.log('running on :' + port);
  res.send('running on :' + port);
});

app.listen(port, function(){
  console.log("app1 running on :" + port )
});
