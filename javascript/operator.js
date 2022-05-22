// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, count: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operator: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; //false

// 하나가 true면 멈춤
// finds the first truthy value
// simple한 value 값을 앞에 두기, 함수 호출은 맨 끝에
console.log(`or: ${value1 || value2 || check()}`);

// &&, find the first falsy value
// 하나가 false면 멈춤
console.log(`or: ${value1 && value2 && check()}`);

// often used to compress log if-statement
// nullableObject && nullableObject.something

function check() {
  for(let i = 0; i< 10; i++){
    //wasting time
    console.log('ㅇ0ㅇ');
  }
  return true;
}

// 6. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log('puzzle~~');
console.log(0 == false); //true
console.log(0 === false); //false (0은 boolean 타입이 아니므로)
console.log('' == false); //true
console.log('' === false); //false (''는 boolean 타입 아님)
console.log(null == undefined); // true
console.log(null === undefined); // false (타입은 다름)

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator : ?
// condition ? value1 : value2
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for muliple if checks
// use for enum-like value check
// use for lmultiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome': // 같은거 묶어서 사용 가능
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed
let i = 3;
while(i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first, then check the condition
// 블럭을 먼저 실행하고 싶을때
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
  console.log(`for:${i}`);
}

for(let i = 0; i > 0; i = i - 2){
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i < 10; i++) {
  if(i % 2 !== 0) {
    continue;
  }
  console.log(`even: ${i}`);
}

// Q2. iterate from - to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 10; i++){
  if(i > 8){
    break;
  }
  console.log(`until 8: ${i}`);
}