const fs = require('fs');
const path = require('path');
const pathToDist = path.join(__dirname, 'project-dist/bundle.css');
const fileToWrite = fs.createWriteStream(pathToDist);

let myFun = function () {

  const myPath = path.join(__dirname, 'styles');

  fs.readdir(myPath,  function(err, items) {

    if (err) {
      console.log('Error', err.message);
      return;
    }

    for (const item of items) {
      const pathsToCheck = path.join(myPath, item);


      fs.stat(pathsToCheck, (err, stats) => {
        if (err) {
          console.log('Error', err.message);
          return;
        }

        if(stats.isFile()) {
          let fileCont = path.parse(pathsToCheck);
          if (fileCont.ext === '.css') {
            let streamFile = fs.createReadStream(pathsToCheck, 'utf8');
            streamFile.on('data', function (chunk) {
              fileToWrite.write(chunk);
            });
          }
        }
      });
    }
  });
};

myFun();