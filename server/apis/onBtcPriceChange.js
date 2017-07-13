import webSocket from 'bitmex-websocket';

export default class onBtcPriceChange {
  constructor(callback) {
    webSocket(function(websocket) {
      websocket.send('{"op": "subscribe", "args": ["trade:XBTUSD"]}');

      websocket.on('message', message => {
        const data = JSON.parse(message).data;
        if (typeof data === 'object')
          callback(data[0])
      });
    });
  }
}
