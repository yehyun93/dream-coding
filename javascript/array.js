'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits.length - 1);

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('peach', 'watermelon');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('strawberry');
console.log(fruits);

// remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice : remove an item by index position
fruits.push('lemon', 'melon');
console.log(fruits);
//fruits.splice(1); //1부터 끝까지 다 지움
fruits.splice(1, 1);
console.log(fruits);
// 지우고 나서 원하는 데이터를 넣을 수 있음
fruits.splice(1, 1, 'apple', 'water_');
console.log(fruits);

// combine two arrays
const fruites2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruites2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('lemon'));
console.log(fruits.indexOf('hey')); // -1

// includes
console.log(fruits.includes('apple'));
console.log(fruits.includes('hey'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); // 첫번째 위치
console.log(fruits.lastIndexOf('apple')); // 마지막 위치

const popFruit = fruits.pop();
console.log(popFruit);