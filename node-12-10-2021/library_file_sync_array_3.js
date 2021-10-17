function addBook(cmd, arr, obj) {
  if (cmd === "add") {
    try {
      if (arr === []) {
        arr.push(obj);
        throw "new array";
      } else if (arr.find((arg) => arg.name === obj.name)) {
        throw "same book name";
      } else {
        arr.push(obj);
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("no add");
  }
}

function updateBook(cmd, arr, obj,file) {
  if (cmd === "update") {
    try {
      if (arr === []) {
        throw "empty array";
      } else if (arr.find((arg) => arg.name === obj.name)) {
        objI = arr.findIndex((obj) => obj.name == obj.name);

        arr[objI].pages = pages;

        fs.writeFileSync(fileName, JSON.stringify(arr));
      }
    } catch (error) {
        console.error(error);
    }
  } else {
    console.error("no update");
  }
}

module.exports.update = updateBook;
