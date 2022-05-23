'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript mac (dynamically typed language)
// can add properties later
ellie.hasJob = true; // 뒤늦게 값을 추가 가능
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob; // 뒤늦게 삭제도 가능
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name); // 이게 맞음
console.log(ellie['name']); // 정확하게 어떤 키가 필요한지 모를때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 함수 작성 시점에는 어떤 키가 들어올지 알 수 없는 상태
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property exstence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

// 6. for..in vs for..of
// for (key in obj)
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for(let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // 가르키는 reference가 같음

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);