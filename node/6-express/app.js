import express from 'express';
const app = express();

// 어떤 메서드로 보내던지 수행됨
// 하지만 api 하위의 다른 경로를 호출 시 실행되지 않음
// 하기 경로에 한해서만 모든 메서드에서 수행
// /api/* <- 이렇게 입력해야 하위 경로도 실행됨
app.all('/api', (req, res, next) => {
  console.log('all');
  next();
});

// sky 하위의 어떤 경로라도 수행됨
app.use('/sky', (req, res, next) => {
  console.log('use');
  next();
});


// 미들웨어는 설정된 순서가 매우 중요하다
app.get('/', 
  (req, res, next) => {
    console.log('first');
    //next('route'); // first2 스킵하고 그 다음걸 실행
    //next(new Error('error')); // next를 하던지 send로 끝내던지 해야함
    // 같은 콜백함수 안에서 send 두개 불가능 -> return을 사용해서 해당 함수에서 나가도록 명시
    if(true) {
      return res.send('Hello');
    }
    res.send('Ellie');
  }, 
  (req, res, next) => {
    console.log('first2');
  }
);

app.get('/', (req, res, next) => {
  console.log('second');
});

// 처리되는 것이 없을때
app.use((req, res, next) => {
  res.status(404).send('Not available!');
});

// 에러 핸들러 -> 중간중간 에러가 발생하면 실행
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later!');
})

// app.get('/sky/:id', (req, res, next) => {
//   console.log(req.path);
//   console.log(req.headers);
//   console.log(req.params);
//   console.log(req.params.id);
//   console.log(req.query);
//   console.log(req.query.keyword);

//   res.send('hi!');
//   res.json({name:'Ellie'});
//   res.sendStatus(400);
//   res.setHeader('key', 'value');
//   res.status(201).send('created');
// });

app.listen(8080);