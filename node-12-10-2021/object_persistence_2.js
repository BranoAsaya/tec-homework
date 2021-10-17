console.log("loading..");
const fs = require("fs");
const data = fs.readFileSync("book.json", "utf8");
let dataJ = JSON.parse(data);
console.log(dataJ);
let min = dataJ[0].pages;
for (let i = 1; i < dataJ.length; i++) {
  if (dataJ[i].pages < min) {
    min = dataJ[i].pages;
  }

}
console.log(min);
