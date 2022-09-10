const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
 eventEmitter.on('tutorial',()=>
 {
     console.log('Event tutorial is running');
 })
 eventEmitter.on('tutorial2',(num1,num2)=>
 {
     console.log(num1 + num2);
 })
 eventEmitter.emit('tutorial');
 eventEmitter.emit('tutorial2',5,5);

 class Person extends EventEmitter
 {
    constructor(name)
    {
        super()
        this._name=name;
    }
    get name()
    {
        return this._name;
    }
 }
 let anish=new Person('Anish');
 let lavanya=new Person('Lavanya');
 anish.on('name',()=>
 {
     console.log('My name is '+anish.name);
 });
 lavanya.on('name',()=>
 {
     console.log('My name is '+lavanya.name);
 });
 anish.emit('name');
 lavanya.emit('name');