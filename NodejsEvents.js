const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfull', () => {
  console.log('Motor full has occurred!');
});

console.log("no event till now....")
myEmitter.emit('Waterfull');