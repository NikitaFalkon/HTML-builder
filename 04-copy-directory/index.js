const fs = require('fs');
const path = require('path');

let myFun = () => {
    const myPath = path.join(__dirname, 'files');

    fs.mkdir(path.join(__dirname, 'filesCopy'), (err) => {
      
        if (err) {
          console.log('Error', err.message);
          return;
        }
          
        console.log('Directory created successfully!');
      });
    

    fs.readdir(myPath,   function(err, items) {
      for (const item of items) {
        if (err) {
          console.log('Error', err.message);
          return;
        }

        let pathToFile = path.join(myPath, item);
        let pathToCopyFile = path.join(path.join(__dirname, 'filesCopy'), item);

        fs.open(pathToCopyFile, 'w', (err) => {
          if (err) {
            console.log('Error', err.message);
            return;
          }
        });

        fs.copyFile(pathToFile, pathToCopyFile, (err) => {
          if (err) {
            console.log('Error Found:', err);
          }
        });  
      }
    });
};

myFun();