var express = require('express');
var app = express();

app.use(express.static('Dapp'))

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/Dapp/index.html")
})

app.listen('3000', () => {
  console.log('running on 3000');
})
