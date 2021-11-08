const fs = require("fs");
const path = require('path');

let myPath = path.resolve('01-read-file', 'text.txt');

fs.readFile(myPath, "utf8",
            function(error, data) {
                if(error) throw error;
                console.log(data); 
            });