// Fixed-size chuck of memory
// array of integers, byte of data
// 고정된 사이즈의 메모리 덩어리
// 숫자의 배열, 데이터에 있는 바이트 그 자체

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]); // ascii 형식으로 출력됨
console.log(buf[1]); 
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // 메모리에서 사용 가능한 덩어리를 찾아서 초기화 시켜줌
const buf3 = Buffer.allocUnsafe(2); // 초기화 하지 않음 (데이터가 들어가 있을수도 있음)
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());