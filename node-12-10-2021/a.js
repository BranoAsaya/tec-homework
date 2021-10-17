const book = require("./library_file_sync_array_3");
const p = require("process");
const fs = require("fs");
const command = p.argv[2];
const name = p.argv[3];
const author = p.argv[4];
const pages = p.argv[5];
const object = {name,author,pages}
const fileName="b.json";
fs.writeFileSync(fileName,)
const array=[]
book.add(command,array,object);
console.log(array);