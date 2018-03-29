var express = require('express'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    Web3 = require('web3'),
    request = require('request'),
    upload = multer(),
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")),
    app = express(),
    balance;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(express.static('public'));



app.get('/', function(req, res){
  res.render('index', {
      ether: 'Give a public key please'
	});
});

app.use('/', function(req, res, next){
  var isAddress = web3.isAddress(req.body.pubkey);
  if(isAddress){
    var url = "https://api.etherscan.io/api?module=account&action=balance&address=" + req.body.pubkey + "&tag=latest&apikey=YourApiKeyToken"
    request(url, function (error, response, body) {
      var num = JSON.parse(body).result;
          balance = web3.fromWei(num, "ether");
      res.render('index', {
        ether: 'Ether: ' + balance,
        bankAcount: 'Address: ' + req.body.pubkey
      });
    });
  } else {
    res.render('index', {
      ether: 'Invalid input'
    })
  };
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server running...")
});
