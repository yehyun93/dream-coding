import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
import {} from 'express-async-errors';

// npm i express-async-errors

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
});

app.get('/file2', (req, res) => {
  // 미들웨어 안에서 프로미스를 사용하면 꼭 리턴 해야함
  return fsAsync.readFile('/file.txt');
});

app.get('/file3', async (req, res) => {
  const data = await fsAsync.readFile('/file.txt');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({message:'Something went wrong'});
});

app.listen(8080);