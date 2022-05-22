// Function
// - fundamental building  block in the program
// - subprogram can be used muliple times
// - performs a task or calculates a value

// 1. Funtion declaration
// function name (param1, param2) {body... return;}
// one function == one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS - 변수에 할당 가능, 리턴 가능
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // unknown

// 4. Rest Parameters (added in ES6)
// 배열 형태로 파라미터가 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++){
    console.log(args[i]);
  }

  // 간편 출력
  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let chileMessage = 'hello';
  }
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if(user.point > 10) {
    // long upgrade logic...
  }
}

// good
function updateUser(user) {
  if(user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function (선언된 후에 사용 가능)
  console.log('print');
}
print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
  if(answer === 'love you') {
    printYes(); //콜백 함수
  } else {
    printNo(); //콜백 함수
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
}

// named function
// better debugging in debugger's stack traces (디버깅할때 함수 이름이 나옴)
// recursions 
const printNo = function print() {
  console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
}

const simplePrint2 = () => console.log('simple!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a + b;
}

// IIFE : Immediately Inveked Function Expression
(function hello() {
  console.log('IIFE');
})();