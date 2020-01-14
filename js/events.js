import EventEmitter from 'events';

const emitter = new EventEmitter();

emitter.on('log', console.log);

emitter.emit('log', 'hello world');