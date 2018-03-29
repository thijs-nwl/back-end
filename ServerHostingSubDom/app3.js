var express = require('express');
var app = express();
var port = 8013;

app.get('/', function(req, res){
  console.log('running on :' + port);
  res.send('running on :' + port);
});

app.listen(port, function(){
  console.log("app3 running on :" + port )
});
