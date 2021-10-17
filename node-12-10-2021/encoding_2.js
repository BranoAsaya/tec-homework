console.log("loading...");

const fs = require("fs");
fs.writeFileSync("a.txt", "שלום עולם");

const data = fs.readFileSync("a.txt");
console.log(data);