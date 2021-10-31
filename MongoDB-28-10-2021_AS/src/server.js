const express = require("express");
const mongo = require("mongodb").MongoClient;
const app = express();
const PORT = 8080;
const dbName = "blog";
const url = `mongodb://localhost:27017/${dbName}`;

mongo.connect(url, function (err, data) {
  if (err) throw err;
  console.log("Database created!");

  let blogData = data.db(dbName);

  blogData
    .collection("authors")
    .find({})
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
    });

  blogData
    .collection("posts")
    .find({})
    .toArray(function (err, res) {
      if (err) throw err;
      console.log(res);
      data.close();
    });
});

function getCollectionData(collection) {
  mongo.connect(url, (err, data) => {
    if (err) throw err;
    console.log("Database created!");
    let blogData = data.db(dbName);
    blogData
      .collection(collection)
      .find({})
      .toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        data.close();
      });
  });
}
getCollectionData("authors");
app.listen(PORT);
