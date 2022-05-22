// JavaScript is very flexible
// flexible == dangerous
// added ECMAScript 5
// 비상식적인거 사용 안됨
'use strict';

// 2. Variable
// let (added in ES6)
// 글로벌 함수는 어플리케이션이 끝날때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 사용
let globalName = 'global name';
{
  let name = 'dory';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}

console.log(name);
console.log(globalName);

// var -> 쓰지마!!
// 아래와 같은 되도읺는 문법 가능
// var hoisting (어디에 선언하든 선언을 제일 위로 끌어올림)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants
// 할당한 뒤로는 값 변경 불가
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefind, symbol
// object, box container
// function, first-class function -> 변수에 할당이 가능, 함수의 인자, 리턴타입으로도 가능
// number -> 자바스크립트는 이것만 쓰면 됨 (심지어 선언도 안해도 됨, 다이나믹)
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bitint (fairly new, don't use it yet)
const bigInt = 123456789123456789123456789123456789n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
console.log(`value: ${char}, type: ${typeof char}`);
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined - 선언은 됬지만 값이 없음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자 만들때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol1);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21; // 내부 값은 변경 가능

// 5. Dynamic typing : dynamically typed language
// 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경됨
// 런타임에서 타입이 변경되기 때문에 오류가 많이 발생.. -> TypeScript 탄생
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75

text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 4, number

console.log(text.charAt(0)); // 오류