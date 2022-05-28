'use strict';

// Promise is a JAvaScript object for asynchronous operation.
// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically. **
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // promise가 만들어 지는 순간 실행됨 (executor가 실행)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then(value => { // resolve가 전달해준 값
    console.log(value);
  })
  .catch(error => { // 안해주면 uncaught 에러
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

// 4. ERror Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('hen'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(` error : ${hen} => 'egg'`)), 1000);
  });
const cook = egg => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => '후라이'`), 1000);
  });

getHen()
.then(getEgg)
.catch(error => {
  return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log);

