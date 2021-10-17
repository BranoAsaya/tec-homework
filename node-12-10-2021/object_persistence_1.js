console.log("loading..");
const fs = require("fs");

const Books = [
  { name: "b1", pages: 45, description: "we" },
  { name: "b2", pages: 100, description: "ke" },
  { name: "b3", pages: 85, description: "pe" },
];
fs.writeFileSync("book.json", JSON.stringify(Books));

fs.readFileSync("book.json", "utf8");
