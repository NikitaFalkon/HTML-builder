const fs = require('fs');
const path = require('path');

let myFun = () => {
  try {
    let myPath = path.resolve('files');

    fs.mkdir(path.join(__dirname, 'filesCopy'),
      { recursive: true }, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log('Directory created successfully!');
      });
    

    fs.readdir(myPath,  { withFileTypes: true }, function(err, items) {
      for (let i=0; i<items.length; i++) {
        fs.open('filesCopy/' + items[i].name, 'w', (err) => {
          if(err) throw err;
        });

        fs.copyFile('files/' + items[i].name, 'filesCopy/' + items[i].name, (err) => {
          if (err) {
            console.log('Error Found:', err);
          }
        });  
      }
    });
  }
  catch (err) {
    console.error(err);
  }
};

myFun();