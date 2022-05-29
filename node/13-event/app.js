const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback = ', args);
};

emitter.on('ellie', callback1);

emitter.on('ellie', (args) => {
  console.log('second callback = ', args);
});


// 이벤트는 더이상 들을 필요가 없을 경우 항상 리스너를 제거해줘야 함
// -> 불필요한 리소스 방지, 메모리 leak 방지
emitter.emit('ellie', { message: 1});
emitter.emit('ellie', { message: 2});
emitter.removeAllListeners('ellie', callback1);
emitter.emit('ellie', { message: 3});