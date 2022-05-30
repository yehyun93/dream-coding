import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  // 동기 -> 함수가 다 실행 되어야 다음으로 넘어감
  // 에러가 발생하면 함수로 에러가 던져짐 -> 트라이/캐치로 잡거나 마지막 에러처리에 포착됨
  try {
    const data = fs.readFileSync('/file.txt');
  } catch(error) {
    res.status(404).send('File not found');
  }

  // 비동기는 에러가 내부적으로 발생하기 때문에 try/catch로 에러를 잡을 수 없다
  // 비동기 -> 파일이 다 읽어지면 콜백함수를 호출
  // 에러처리 안하면 마지막 에러처리에도 도달하지 않음
  // -> 첫번째 인자로 에러가 도착함
  // 각각의 미들웨어는 동기로 연결되어 있음 -> 비동기일 경우 콜백함수로 전달되었기 때문에(내부적으로만 발생) 에러가 발생된지 알수가 없음
  fs.readFile('file1.txt', (err, data) => {
    if(err) {
      res.status(404).send('File not found');
    }
  });
});

// promise : 비동기
// .catch 함수로 잡아야함
app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file.txt')
    //.catch(next); // 마지막 에러로 전달됨
    .catch(error => res.status(404).send('File not found'));
});

app.get('/file3', async (req, res) => {
  // 코드 자체는 동기적
  // but 마지막 에러에는 포착되지 않음
  // 함수 앞에 async를 붙이면 동기적으로 처리되는 것 처럼 보이지만, 프로미스로 감싸져있음
  // -> 안에서 에러가 발생하면 프로미스 내부에서 발생 되는 것과 똑같음
  try {
    const data = await fsAsync.readFile('/file.txt');
  } catch(error) {
    res.status(404).send('File not found');
  }
});

// 최종적으로 보류하는 에러, 각각 미들웨어에서 처리 해줘야함
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({message:'Something went wrong'});
});

app.listen(8080);