'use strict';
// Object-Oriented programming
// class : template
// object: instance of a class
// 도입된지 얼마 안됨
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // 게터세터 생성 시 this.age 는 get을 통해 데이터를 가져오고
    // = age는 setter를 통해 변수를 할당함
  }

  get age() {
    return this._age;
  }
  
  set age(value) {
    // if(value < 0) {
    //   throw Error('age can not be negative');
    // }

    // setter를 무한정 호출함 -> 앞에 언더바 붙여서 바꾸기
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Jos', -1);
console.log(user1.age);

// 3. Fields (public, private)
// 얼마안됨
class Experiment {
  publicField = 2;
  #privateField = 0; // 클래스 외부에서는 읽을수도 변경할 수도 없다
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// 얼마 안됨
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Retceangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 메서드 호출
    console.log('세모');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle : color ${this.color}`;
  }
}

const rectangle = new Retceangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Retceangle); // true
console.log(triangle instanceof Retceangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(rectangle instanceof Object); // true
console.log(triangle.toString());
