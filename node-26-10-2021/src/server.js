const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 8080;
const file = "comments.json";
const publicPath = path.join(__dirname, "..", "public");
let comments;
let comment;
let index;
let numId = 0;
let name;
let email;
let params;
let body;

app.use(express.static(publicPath));
app.use(express.json());

try {
  let commentsJson = fs.readFileSync(file, "utf8");
  comments = JSON.parse(commentsJson);
} catch (err) {
  comments = [];
}

app.get("/comments", (req, res) => {
  fs.writeFileSync(file, JSON.stringify(comments));
  res.send(comments);

});
app.get("/comments/:id", (req, res) => {
  params = req.params;
  comment = comments.find((obj) => {
    return obj.id == params.id;
  });
  console.log(comment);
  if (comment) {
    res.send(comment);
  } else {
    res.sendStatus(404);
  }
});
app.delete("/comments/:id", (req, res) => {
  params = req.params;
  index = comments.findIndex((obj) => {
    return obj.id == params.id;
  });
  console.log(comments, index);
  if (index == -1) {
    res.sendStatus(404);
    return;
  }
  comments.splice(index, 1);
  fs.writeFileSync(file, JSON.stringify(comments));
  res.sendStatus(200);
});

app.post("/comments", (req, res) => {
 
  body= req.body
  name = body.name;
  email = body.email;
 
  if (comments.length == 0) {
    numId = 0;
  } else {
    numId++;
  }
  if(name[0] == " " || name.length == 0){
    return "empty"
  }
  comment = { id: numId, name: name, email: email };
  comments.push(comment);
  fs.writeFileSync(file, JSON.stringify(comments));

  res.send(comments);
});

app.patch("/comments/:id", (req, res) => {
  body= req.body
  params = req.params;
  comment = comments.find((obj) => obj.id == params.id);
  index = comments.findIndex((obj) => obj.id == params.id);
  if (index == -1) {
    res.sendStatus(404);
  }
  comments[index].name = body.name
  comments[index].email = body.email
  fs.writeFileSync(file, JSON.stringify(comments));
  res.sendStatus(200);
});

app.get("*",(req,res)=>{res.sendStatus(404); })
app.listen(PORT);
