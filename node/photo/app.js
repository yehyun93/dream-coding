const fs = require('fs');
const path = require('path');

const photo_dir_path = process.argv[2];

const mkdirs = ['video', 'captured', 'duplicated'];

mkdirs.forEach(dirName => {
  makeDir(dirName);
});

fs.promises.readdir(photo_dir_path, {withFileTypes: true})
.then(data => {
  for(let i = 0; i < data.length; i++) {
    let fileInfo = data[i];
    let targetDir = '';
    let fileName = '';
    let fileExt = checkExtension(fileInfo.name);

    if(!fileInfo.isDirectory()) {
      fileName = fileInfo.name;

      if(fileExt === '.png' || fileExt === '.aae') {
        targetDir = 'captured';
      } else if (fileExt === '.mov' || fileExt === '.mp4') {
        targetDir = 'video';
      }

      if(fileName.indexOf('E') > 0) {
        targetDir = 'duplicated';
      }

      movingFiles(fileName, targetDir);
    }
  }
});

function makeDir(dirName) {
  let mkdir_path = path.join(path.dirname(__dirname), photo_dir_path, dirName);

  if(!fs.existsSync(mkdir_path)) {
    fs.mkdir(mkdir_path, () => {});
  }
}

function checkExtension(fileName) {
  return path.extname(fileName);
};

function movingFiles(fileName, targetDir) {
  const dirPath = path.join(path.dirname(__dirname), photo_dir_path);
  const currPath = path.join(dirPath, fileName);
  const targetPath = path.join(dirPath, targetDir, fileName);

  fs.rename(currPath, targetPath, err => {console.log(err)});
}