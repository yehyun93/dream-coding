const http = require('http');
const fs = require('fs');
// const http2 = require('http2'); // https 개발하는 단계에서는 굳이 ㄴ -> 배포할때 변경

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log(('incoming...'));
  // console.log(req.headers);
  // console.log(req.httpVersion);
  // console.log(req.method);
  // console.log(req.url);

  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if(url === '/') {
    // pipe 사용 시 내부에서 end 처리를 해주기 때문에 res.end 안써도 됨
    // pipe는 비동기적인 함수이므로 호출 후 작업이 끝날때까지 기다리지 않고 다음 코드 라인으로 넘어감
    // -> piping이 되고 있는 중간에 res.end()를 호출하게 되면 파이핑이 멈춤!
    fs.createReadStream('./html/index.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }
});

// 어떤 서버에서 계속 들을껀지
server.listen(8080);