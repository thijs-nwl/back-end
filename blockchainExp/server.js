const express = require('express');
const request = require('request')
const app = express();

var url = ["https://api.cryptonator.com/api/ticker/btc-eur", "https://api.cryptonator.com/api/ticker/eth-eur", "https://api.cryptonator.com/api/ticker/xrp-eur", "https://api.cryptonator.com/api/ticker/xem-eur", "https://api.cryptonator.com/api/ticker/rep-eur"];
var data = [];
var obj = {};

app.use('/', (req,res,next) => {
  for(i=0; i<url.length; i++){
      request(url[i], function (error, response, body) {
        if(error){
          console.log('error:', error);
          console.log('statusCode:', response && response.statusCode);
        } else {
        obj = {
          base: JSON.parse(body).ticker.base,
          curr: JSON.parse(body).ticker.target,
          price: JSON.parse(body).ticker.price
        }
        data.push(obj);
      }
    });
  }
  next()
})

app.get('/', (req,res) => {
  for(var j=0; j<data.length; j++){
    console.log('*********************');
    console.log(data[j]);
  }
  res.send('succes')
})

app.listen(8000, () => {
  console.log('server running on 8000');
})
