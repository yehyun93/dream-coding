// JSON
// JavaScript Object Notation

// 1. object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name : 'tori',
  color : 'white',
  size : null,
  birthDate : new Date(),
  jump : () => { // 함수는 오브젝트가 아니라서 변환되지 않음
    console.log(`{name} can jump!`);
  }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

// 좀 더 세밀하게 조절하기 위해 콜백함수 사용 가능
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. Json to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

// 처음 Object 생성 시 birthDat는 Date 객체
// -> json으로 변환 시 string 타입으로 변환 됨
// -> 다시 Object로 변경해도 string 타입으로 변환
// -> 이러한 부분을 변환해주기 위해 parse 함수 내 콜백함수를 활용
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); 