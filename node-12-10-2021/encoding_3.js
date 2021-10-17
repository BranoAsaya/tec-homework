console.log("loading..");

const fs = require("fs")

fs.writeFile('b.txt', 'Hello Node.js', (err) => {
    if (err){
    console.error("");
    }
  
});

fs.readFile("b.txt",(err,data)=>{
    if (err) {
        console.error('error');
    }
    console.log(data);
})
