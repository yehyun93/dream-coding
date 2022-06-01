import express from 'express';
import postRouter from './router/post.js'
import userRouter from './router/user.js'

const app = express();

// REST API에서 BODY를 파싱
app.use(express.json());
// HTML Form에서 submit을 해서 발생되는 데이터를 body안으로 파싱
app.use(express.urlencoded({extended: false}));
app.use(express.static('public')); // 내부에 다양한 옵션 설정 가능


// 최상위 루트를 설정한 다음 라우터를 연결하면 라우트 내부에서 생략 가능
app.use('/posts', postRouter);
app.use('/users', userRouter);


app.listen(8080);
