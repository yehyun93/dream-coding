const fs = require('fs');
const path = require('path');

const photo_dir_path = process.argv[2];

if(!photo_dir_path) {
  console.error('Please enter the folder name');
}

const mkdirs = ['video', 'captured', 'duplicated'];

mkdirs.forEach(dirName => {
  makeDir(dirName);
});

fs.promises
  .readdir(photo_dir_path, {withFileTypes: true})
  .then(processFiles);

function makeDir(dirName) {
  let mkdir_path = path.join(path.dirname(__dirname), photo_dir_path, dirName);

  console.log(mkdir_path);

  if(!fs.existsSync(mkdir_path)) {
    fs.mkdir(mkdir_path, err => {console.log()});
  }
}

function processFiles(files) {
  console.log('process');
  files.forEach(file => {
    if(!file.isDirectory()){
      let fileName = file.name;
      let fileExt = checkExtension(file.name);
      let targetDir = '';

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
  });
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