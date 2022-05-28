'use strict';

// JavaScript is synchronous
// Excute the code block by orger after hoisting
// 작성한 순서에 따라 동기적으로 실행 됨
// hoisting : var, function declaration
// -> var, 함수의 선언을 제일 위로 올리는거
console.log('1');
setTimeout(() =>  // 나중에 다시 불러줘 (CallBack)
  console.log('2'), 1000); // 브라우저로 요청 -> 1초 후 브라우저가 함수 실행하라고 함
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// CallBack Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if(
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if(user === 'ellie') {
        onSuccess({name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your pwd');
userStorage.loginUser(id, password, 
  (user) => {
    userStorage.getRoles(
      user, 
      (userWithRole) => {
        alert(`Heelo ${userWithRole.name}, you have a ${userWithRole.role} role`)
      }, 
      (error) => {
        console.log(error);
      })
  }, 
  (error) => {
    console.log(error);
  }
);