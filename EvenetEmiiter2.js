const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
const listner1=function listner1()
{
    console.log('Listner 1 executed');
}
const listner2=function listner2()
{
    console.log('Listner 2 executed');
}
eventEmitter.addListener('connection',listner1)
eventEmitter.on('connection',listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" Listener listening to connection event");
eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listner1);
console.log('Listener 1 will not listen now');
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" Listener listening to connection event");
eventEmitter.emit('connection');

console.log('Program closed');