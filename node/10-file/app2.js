const fs = require('fs').promises;

// reading a file
fs.readFile('./text.txt', 'utf8')
  .then(data => console.log(data))
  .catch(console.error());

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :)')
  .catch(console.error());

fs.appendFile('./file.txt', 'Yo, Dream Coders! :)')
  .then(() => {
    fs.copyFile('./file.txt', './file2.txt')
    .catch(console.error());
  })
  .catch(console.error());

// 비동기는 순차적으로 될수도 있고 아닐수도 있음 (순서가 보장이 되지 않는다)
// 순서가 보장되어야 한다면 then 안에서 순서를 지정해줘야 한다

folder
fs.mkdir('sub-folder')
  .catch(console.error());

fs.readdir('./')
  .then(console.log)
  .catch(console.log);