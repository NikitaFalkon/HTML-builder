const fs = require('fs');
const path = require('path');
const myPath = path.join(__dirname, 'secret-folder');

let myFun = () => {
  fs.readdir(myPath, function (err, items) {
    if (err) {
      console.log('Error', err.message);
      return;
    }

    for (const item of items) {
      console.log(item);
      let pathsToCheck = path.join(myPath, item);

      fs.stat(pathsToCheck, (err, stats) => {
        if (err) {
          console.log('Error', err.message);
          return;
        }

        if (stats.isFile()) {
          let fileObj = path.parse(pathsToCheck);
          let fileExt = fileObj.ext;
          if (fileExt[0] === '.') {
            console.log(fileObj.name, ' - ', fileExt.slice(1), ' - ', `${stats.size / 1000}kb`);
          } else {
            console.log(fileObj.name, ' - ', fileExt, ' - ', `${stats.size / 1000}kb`);
          }
        }
      }
      );
    }
  });
};

myFun();
