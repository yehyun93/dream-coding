const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  // 테스크 큐가 비면 이거 실행해달라 (위에 setTimeout보다 빨리 실행됨)
  console.log('nextTick');
});
for(let i = 0; i< 100; i ++) {
  console.log('for loop');
}

