var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

var mailAccountUser = 'thijsdevmode@gmail.com'
var mailAccountPassword = 'Thijsdev*42$'

var fromEmailAddress = 'thijsdevmode@gmail.com'
var toEmailAddress = 'thijsdonk2013@gmail.com'

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
    subject: "hello world!",
    text: "Hello!",
    html: "<b>Hello!</b>"
}

app.get('/', (req,res) => {
  transport.sendMail(mail, function(error, response){
      if(error){
          console.log(error);
          res.send('bs')
      }else{
          console.log("Message sent: " + response.message);
          res.send('succes')
      }

      transport.close();
  });
})

app.listen(8080, () => {
  console.log('server on 8080');
})
