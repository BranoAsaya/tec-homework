//!!command_line_1

// const numArr =[5,7,6,81,4];
// const process = require("process");

// let input= process.argv[2];

// function findNumInArr(num){
//     return num == input
// };
// const result = numArr.find(findNumInArr)
// if(result == undefined){
//     console.log('value not found');
// }
// else{
//     console.log(result);
//     console.log(`in index of:${numArr.indexOf(result)}`);
// }

//!!command_line_2

// const arrNum = [11,8,7,4,6]
// const process = require('process');

// let input = process.argv[2];
 
// if(input == 'max'){
//     console.log(Math.max(...arrNum)); 
// }
// else if(input == 'min'){
//     console.log(Math.min(...arrNum)); 
// }
// else if(input == 'sum'){
//     console.log(
// arrNum.reduce((a, b) => a + b, 0)
//       )
// }
// else if(input == 'avg'){
    
// console.log(arrNum.reduce((a, b) => a + b, 0)/arrNum.length)
// }
// else{console.log("error");}

//!!command_line_3


// const arrNum = [11,8,7,4,6]
// const process = require('process');

// let input = process.argv[2];

// switch(input){
//     case 'max':{
//         console.log(Math.max(...arrNum));
//         break; 
//     }
//     case 'min':{
//         console.log(Math.min(...arrNum)); 
//         break; 
//     }
//     case 'sum':{
//         console.log(arrNum.reduce((a, b) => a + b, 0));
//         break; 
//     }
//     case 'avg':{
//         console.log(arrNum.reduce((a, b) => a + b, 0)/arrNum.length)
//         break; 
//     }
//     default:{
//         console.log("error");
//         break;
//     }
// }