const app = require('express')();

app.get('/', (req, res) => {
  res.send('hello from internalServer');
});

function log (txt) {
  console.log(txt)
}

setInterval( () =>{
  log("before");
}, 1000)

function doSomething() {
  var d = new Date(),
  h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, 0, 0, 0),
  e = h - d;
  setTimeout(doSomething, e);

  //code to be run
  console.log("On the hour || " + new Date())
}
doSomething(); 

setInterval( () =>{
  log("after");
}, 1000)

app.listen(4000, '0.0.0.0', function(){
  console.log('listening to port: ' + 4000);
});
