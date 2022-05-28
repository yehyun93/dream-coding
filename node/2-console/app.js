console.log('loggin...');
console.clear();

// log level
// 배포 시 레벨별로 보여줄지 여부를 설정 가능
console.log('log'); // 개발
console.info('info'); // 중요한 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자/시스템 에러

// assert - 특정한 조건일때만 출력하고 싶다면
// false인 경우에만 출력됨
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print obejct
const student = { name: 'ellie', age: 20, company: { name: 'AC'} };
console.log(student);
console.table(student); // 테이블 형으로 보기 쉽게
console.dir(student, {showHidden: true, colors: false, depth: 0});

// measuring time
console.time('for loop');
for(let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
  f2();
}

function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();