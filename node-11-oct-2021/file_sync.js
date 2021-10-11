//!!file_sync_1
// const fs = require("fs");

// fs.writeFileSync("doc.txt","new document",{flag:'w'})

//!!file_sync_2

// const fs = require("fs");
// fs.readFile('./doc.txt', 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })

//!!file_sync_3

// const fs = require("fs");

// fs.writeFileSync("doc.txt" , " more words",{flag:'a'})

//!!file_sync_4

// const fs = require("fs");
// const book = {name : 'book1' , pages : 123}
// fs.writeFileSync("doc.txt" ,JSON.stringify(book),{flag:'w'})

//!!file_sync_5

// const fs = require("fs");
// fs.readFile('./doc.txt', 'utf8' ,(err,data) => {
//     if(err){
//         console.error(err);
//         return
//     }
//     console.log(JSON.parse(data));
// });