var express = require('express');
var app = express();
var port = 8012;

app.get('/', function(req, res){
  console.log('running on :' + port);
  res.send('running on :' + port);
});

app.listen(port, function(){
  console.log("app2 running on :" + port )
});
