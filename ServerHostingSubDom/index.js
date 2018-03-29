var http = require('http');
var http_proxy = require('http-proxy');

var options = {
  'app1': 'http://127.0.0.1:8011',
  'app2': 'http://127.0.0.1:8012',
  'app3': 'http://127.0.0.1:8013',
}
var proxy = http_proxy.createProxy();
http.createServer(function(req, res) {
  proxy.web(req, res, {
    target: options[req.headers.host]
  });
  console.log(req.headers);
}).listen(8010 , function(){
  console.log('index.js running...')
});
