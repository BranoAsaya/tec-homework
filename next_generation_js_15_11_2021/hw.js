const longArray = [];
let count = 0;

while (count < 1000) {
  longArray.push(count);
  count++;
}
// console.log(longArray);
const squareRootArr = longArray.map(Math.sqrt);
// console.log(squareRootArr);
const result = longArray.filter((num) => num % 2 === 0);
const arr = (array) => array.filter((num) => num % 2 === 0);

console.log(arr(longArray));
