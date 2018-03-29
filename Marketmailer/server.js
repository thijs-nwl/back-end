var express = require('express'),
 app = express(),
 nodemailer = require('nodemailer'),
 request = require('request'),

 mailAccountUser = 'thijsdevmode@gmail.com',
 mailAccountPassword = 'Thijsdev*42$',

 fromEmailAddress = 'thijsdevmode@gmail.com',
 toEmailAddress = 'thijsdonk2013@gmail.com'

var url = ["https://api.cryptonator.com/api/ticker/btc-eur", "https://api.cryptonator.com/api/ticker/eth-eur", "https://api.cryptonator.com/api/ticker/xrp-eur", "https://api.cryptonator.com/api/ticker/xem-eur", "https://api.cryptonator.com/api/ticker/rep-eur"];
var data = [];
var obj = {};

var reqTimer = setTimeout(function wakeUp() {
   request("https://marketmailer.herokuapp.com", function() {
      console.log("WAKE UP DYNO");
   });
   return reqTimer = setTimeout(wakeUp, time/4);
}, time/4);

var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: mailAccountUser,
      pass: mailAccountPassword
  },
  tls: {
    rejectUnauthorized: false
  }
})

var mail = {
  from: fromEmailAddress,
  to: toEmailAddress,
  subject: "Market Update",
  html: ''
};


app.set('port', (process.env.PORT || 5000));


function Data(item, index, arr) {
  console.log('Data()')
  request(arr[index], function (error, response, body) {
    if(error){
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
    } else {
      console.log('in else');
      obj = {
        base: JSON.parse(body).ticker.base,
        curr: JSON.parse(body).ticker.target,
        price: JSON.parse(body).ticker.price
      }
      data.push(obj);
    }
  })
}


function getData(log, callback) {
  console.log('getData()');
  url.forEach(function(item){
    console.log('in forEach()');
    request(item, function (error, response, body) {
      if(error){
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
      } else {
        obj = {
          base: JSON.parse(body).ticker.base,
          curr: JSON.parse(body).ticker.target,
          price: JSON.parse(body).ticker.price
        }
        console.log(obj.price);
        data.push(obj);
      }
    })
  })
  callback()
}


function mailUpdate(dataMsg, callback){
  console.log('mailUpdate()');
  for(var k=0; k<dataMsg.length; k++){
    var msg = 'value ' + dataMsg[k].base + ' : ' + dataMsg[k].price + ' euro';
    mail.html += msg + '<br>';
  }
  callback();
}

function sendEmail() {
    console.log('sendMail()');
    transport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            data.length = 0;
            mail.html.length = 0;
            console.log("Message sent: " + response.message + mail);
        }
        transport.close();
    });
  }

function compFunc() {
  console.log('compFunc()');
  getData('data()', function(){
    mailUpdate(data, function(){
      sendEmail()
    })
  })
}

var time = 1000 * 10;
setInterval(compFunc, time);

app.get('/', (req,res) => {
  res.send('crypto vall mailer || Thijs Donk')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
