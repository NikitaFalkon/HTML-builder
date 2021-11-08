const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

const fs = require("fs");
const path = require("path");

let myPath = path.resolve('02-write-file', 'text.txt');

fs.open('text.txt', 'w', (err) => {
  if(err) throw err;
  console.log('File created');
});

rl.question('Write some text ', (answer) => {
  
  fs.writeFile(myPath, answer, function(error){ 
    if(error) throw error; 
  });

  rl.close();
});



