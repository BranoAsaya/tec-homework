console.log("loading..");

const p = require("process");
const fs = require("fs");
const fileName = "library.json";

const command = p.argv[2];
const name = p.argv[3];
const author = p.argv[4];
const pages = Number(p.argv[5]);

if (p.argv[2] === undefined || p.argv[3] === undefined) {
  console.error("wrong input");
  return;
}

let libraryObj;

try {
  let libraryJson = fs.readFileSync(fileName, "utf8");
  libraryObj = JSON.parse(libraryJson);
} catch (error) {
  libraryObj = [];
}

const book = { name, author, pages };

switch (command) {
  case "add":
    try {
      if (libraryObj === []) {
        libraryObj.push(book);
        throw "new array";
      } else if (libraryObj.find((arg) => arg.name === book.name)) {
        throw "same book name";
      } else {
        libraryObj.push(book);
      }
    } catch (error) {
        console.error(error);
    }
    break;
  case "update":
    try {
      if (libraryObj === []) {
        throw "empty array";
      } else if (libraryObj.find((arg) => arg.name === book.name)) {
        objI = libraryObj.findIndex((obj) => obj.name == book.name);

        libraryObj[objI].pages = pages;

        fs.writeFileSync(fileName, JSON.stringify(libraryObj));
      }
    } catch (error) {
        console.error(error);
    }
    break;
  case "delete":
    try {
      if (libraryObj === []) {
        throw "empty array";
      } else if (libraryObj.find((arg) => arg.name === book.name)) {
        objI = libraryObj.findIndex((obj) => obj.name == book.name);
        libraryObj.splice(objI, 1);

        fs.writeFileSync(fileName, JSON.stringify(libraryObj));
      }
    } catch (error) {}
    break;
  case "get All":
    console.log(JSON.stringify(libraryObj));
    break;
  case "search":
    try {
      if (libraryObj.find((arg) => arg.name === book.name)) {
        objI = libraryObj.findIndex((obj) => obj.name == book.name);

        throw libraryObj[objI];
      } else {
        throw "not found";
      }
    } catch (error) {
      console.error(error)
    }

    break;
  default:
    console.error("must put command");
}



libraryJson = JSON.stringify(libraryObj);
fs.writeFileSync(fileName, libraryJson);
console.log(libraryObj);
