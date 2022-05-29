const fs = require('fs');
const zlib = require('zlib');

// createReadStream => 스트림을 열어놓기만 한 상태 (paused)
// 'data', stream.resume, stream.pipe를 통해 flowing 모드로 변경
const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream); // 스트림과 스트림을 연결하여 데이터가 흘러갈 수 있도록 함
piping.on('finish', () => {
  console.log('done!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});
server.listen(3000);