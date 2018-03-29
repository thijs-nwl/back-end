var fs = require('fs');
var i = 1;

var isRunning = false;

if(!isRunning){
  console.log('isRunning false');
}

fs.watch('./watchDir', (change, watchme) => {
    console.log(i+'.change');
    i++;
})
