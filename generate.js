const fs = require('fs');
const pathFolder  = './data';
const chars = "abcdefghjiklmnopqrstuvwxyz0123456789";
const randomSlug = function(length = 20){
  let word = "";
  for(let i = 0; i < length; i++){
    word+= chars[Math.floor(Math.random() * chars.length)];
  }

  return word;
}
const pathNumber = pathFolder + '/numbers/';
const pathSize = pathFolder + '/sizes/';

if(!fs.existsSync(pathFolder)) {
  fs.mkdirSync(pathFolder);
}
if(!fs.existsSync(pathNumber)) {
  fs.mkdirSync(pathNumber);
}
if(!fs.existsSync(pathSize)) {
  fs.mkdirSync(pathSize);
}


const nbFiles = Math.floor(Math.random() * 500) + 100;

// random Number
for(let i = 0; i < nbFiles; i++){
  fs.appendFileSync(pathNumber + randomSlug(), Math.floor(Math.random() * 4096) + 1024);
}

//random sized file
for(let i = 0; i < nbFiles; i++){
  fs.appendFileSync(pathSize  + randomSlug(), randomSlug(Math.floor(Math.random() * 8192)));
}


