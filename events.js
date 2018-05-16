var events = require('events');

var eventEmitter = new events.EventEmitter();


var connectHandler = function () {
    console.log('connected ...');
    eventEmitter.emit('sendData');
    eventEmitter.emit('sendData');

}

eventEmitter.on('initConnection', connectHandler);
eventEmitter.on('sendData', function () {
    console.log('Data recieved successfully ...');
})

eventEmitter.emit('initConnection');

console.log('Program ended')
