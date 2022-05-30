const { clearInterval } = require("timers");

let num = 1;
const interval = setInterval(() => { // 중지 안하면 평생 돌아감
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log('Timeout!');
  clearInterval(interval);
}, 6000);