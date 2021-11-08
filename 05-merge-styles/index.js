const fs = require('fs');
const path = require('path');
const pathToDist = path.join(__dirname, 'project-dist/bundle.css');
const fileToWrite = fs.createWriteStream(pathToDist);
let mass = [];

let myFun = function () {

  try {

    let myPath = path.resolve('styles');

    fs.readdir(myPath,  { withFileTypes: true }, function(err, items) {

      for (let i = 0; i < items.length; i++) {

        let pathsToCheck = path.resolve('styles', items[i].name);

        fs.stat(pathsToCheck, (err, stats) => {
          if(!stats.isDirectory() && path.extname(items[i].name) === '.css') {
            let  streamFile = fs.createReadStream(pathsToCheck,'utf8');
            streamFile.on('data', function (chunk) {
            fileToWrite.write(chunk);
            });
          }
        });
      }

      // fs.writeFile(myPath, mass[0], function(error){
      //   if(error) throw error;
      // });

      console.log(mass);

    });

    // fs.open('text.txt', 'w', (err) => {
    //   if(err) throw err;
    //   console.log('File created');
    // });
    //
    // fs.writeFile(pathing, mass[0], function(error){
    //   if(error) throw error;
    // });

  }
  catch (err) {
    console.error(err);
  }
};

myFun();