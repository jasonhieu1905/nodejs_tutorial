var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log('Listener 1 ...')
}

var listener2 = function listener2() {
    console.log('Listener 2 ...')
}

var listener3 = function listener3() {
    console.log('Listener 3 ...')
}

eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);
eventEmitter.addListener('connection', listener3);


eventEmitter.removeListener('connection', listener2)

var numberConnection = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(`Number of listenner : ${numberConnection}`);