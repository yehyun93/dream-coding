const fs = require('fs');

// api는 세가지 형식
// rename(...., callback(error, data)) -> 필요한 일들을 다 한 후에 callback 함수 실행 (비동기)
// try {renameSync(....)} catch(e) {} -> 따로 콜백함수 x, 끝날 때 까지 다음 함수로 넘어가지 않음
// promise.rename().then().catch(0)

try {
  // 끝날때 까지 다음줄로 넘어가지 않으므로 가급적 사용하지 않는 것이 좋다
  fs.renameSync('./text.txt', './text-new.txt');
} catch(error) {
  console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt')
  .then(() => console.log('Done!!'))
  .catch(console.error);