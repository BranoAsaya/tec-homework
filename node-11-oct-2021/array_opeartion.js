//!!array_operation_1

// const bookArr = [];

// bookArr.push(
//     {name : 'book1' , pages : 123},
//     {name : 'book2' , pages : 201},
//     {name : 'book3' , pages : 311}
//     )
// console.log(bookArr);

//!!array_operation_2

// const process = require("process");
// const name = process.argv[2];

// function findBook(book) {
//     return book['name'] == name;
//   }

// const result = bookArr.find(findBook);  
// if(name == result.name){
//     console.log(result.pages);
// }
// else{console.log("book was not found");} 

//!!array_operation_3

// const process = require("process");
// const name = process.argv[2];

// function findBook(book) {
//     return book['name'] == name;
//   }

// const result = bookArr.find(findBook);  
// if(name == result.name){
//     console.log(result.pages + 100);
// }
// else{console.log("book was not found");} 

//!!array_operation_4

// const process = require("process");
// const name = process.argv[2];

// function findBook(book) {
//     return book['name'] == name;
//   }

// const result = bookArr.find(findBook); 
// bookArr.indexOf(result.name) 

// for (let i = 0; i < bookArr.length; i++) {
   
//     if(name == result.name){
//         bookArr.splice(i,1)
//         console.log(bookArr);
//     }
//     else{console.log("book was not found");} 
// }


//!!array_operation_4

const numArray = [4,8,3,9];
const process = require("process");
const input =Number( process.argv[2]);

numArray.find(num =>{
    if(num === input){
        console.log(input +1);
    }
    else{"error"}
})