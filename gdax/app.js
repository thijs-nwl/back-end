const gdax = require('gdax');
const pubClient = new gdax.PublicClient();
const callback = (error, response, data) => {
  if (error)
       return console.dir(error);
  return console.dir(data);
}

pubClient.getProducts(callback);

const eth = 'ETH-USD';
const websocket = new gdax.WebsocketClient([eth]);
const cb = (data) => console.dir(data);

websocket.on('message', cb)
