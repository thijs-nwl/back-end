var express = require('express');
var app = express();

/* app.get('/:id', function(req, res){								express creates zelf een route ga maar naar localhost:3000/2341234
	res.send('The id you specified was ' + req.params.id);			voor id kan je vanalles invullen
}); */

app.get('/:id([0-9]{5})', function(req, res){						/*you can only give the id 5 numbers*/
	res.send('the id you specified was ' + req.params.id);
});

app.get('*', function(req, res){									/*als de route niet bestaat dan krijg je deze soort van error handler. DIT is ALTIJD je laatste GET method*/
	res.send('Sorry, this is an invalid URL');
});
app.listen(3000);
console.log('Server running...');