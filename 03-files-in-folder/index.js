const fs = require('fs');
const path = require('path');

let myFun = () => {
  try {
    let myPath = path.resolve('secret-folder');
    fs.readdir(myPath,  { withFileTypes: true }, function(err, items) {
     
      for (let i=0; i<items.length; i++) {
          
        let pathsToCheck = path.resolve('secret-folder', items[i].name);

        fs.stat(pathsToCheck, (err, stats) => {
          if(!stats.isDirectory()) {
            let inn = items[i].name.split('.');
            console.log(inn[0], path.extname(items[i].name), stats.size);
          }
        });
      }
    });
  } catch (err) {
    console.error(err);
  }
};

myFun();
