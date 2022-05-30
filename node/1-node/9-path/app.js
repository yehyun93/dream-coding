const path = require('path');

// 운영체제에 따라 표기되는 경로가 다르다 **
console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

// bbasename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root
parsed.name

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/ 절대경로
console.log('isAbsolute?', path.isAbsolute('../'));  // 상대경로

// normalize - 이상한거 알아서 수정
console.log(path.normalize('./folder//////sub'));

// join - 자동으로 패스를 만들어줌
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'iamge'));

