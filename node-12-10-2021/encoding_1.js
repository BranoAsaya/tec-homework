console.log("loading...");

const fs = require("fs");

fs.writeFileSync("a.txt", "Node is great");

const data = fs.readFileSync("a.txt");
console.log(data);

//!!לא התקבלה מחרוזת
//!!ניתן לפענח את מה שהתקבל בעזרת UTF8
//!!צריך להוסיף לרייד UTF8
