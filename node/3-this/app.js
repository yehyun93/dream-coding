// 어디에서 쓰여지냐에 따라서 완전히 다르다

function hello() {
  console.log(this); // global
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num; 
  }
  memberfunction() {
    console.log('-----class -----');
    console.log(this); // class 자기자신
    console.log(this === global);
  }
}

const a = new A(1);
a.memberfunction();


console.log('---- global scope ---');
console.log(this);
console.log(this === module.exports);