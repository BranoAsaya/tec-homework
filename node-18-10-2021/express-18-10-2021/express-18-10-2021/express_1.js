console.log("loading...");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get('/',(req,res)=>{
    const fullPath = path.join(__dirname,'public','index.html')
    res.sendFile(fullPath)
})

app.listen(PORT)