const fs = require('fs');
const path = require('path');
const pathToDist = path.join(__dirname, 'project-dist/bundle.css');
const fileToWrite = fs.createWriteStream(pathToDist);
let mass = [];

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

          if(!stats.isDirectory() && path.extname(item.name) === '.css') {
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
};

myFun();