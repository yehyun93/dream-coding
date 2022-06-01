import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // 쿠키 정보 알려줌
import morgan from 'morgan'; // 서버에 대한 로그 남겨줌
import helmet from 'helmet'; // 보안에 필요한 헤더들을 추가해줌

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined')); // 여러 포맷을 통해서 로그 옵션 정의가능
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  
  console.log(req.body);
  console.log(req.cookies);
  // req.cookies.yummy_cookie;
  res.send('Welcome!');
});

app.listen(8080);