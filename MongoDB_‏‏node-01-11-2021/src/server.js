const express = require("express");
const app = express();
const PORT = 8080;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const url = "mongodb://localhost:27017/";
const DBname = "jsonplaceholder";
const collection = "todos";
const client = MongoClient.connect(url);

let database, body, params, object, update;

app.use(express.json());

app.get("/tasks", (req, res) => {
  client
    .then((data) => {
      console.log("connected");
      database = data.db(DBname);
      database
        .collection(collection)
        .find({})
        .toArray()
        .then((todos) => {
          res.send(todos);
        });
    })
    .catch((err) => {
      console.error("err");
    });
});

app.patch("/tasks/:id", (req, res) => {
  client
    .then((data) => {
      console.log("connected");
      database = data.db(DBname);
      body = req.body;
      params = req.params.id;
      object = { id: Number(params) };
      console.log(object);
      update = {
        $set: {
          userId: body.userId,
          id: body.id,
          title: body.title,
          completed: body.completed,
        },
      };
      database
        .collection(collection)
        .updateOne(object, update)
        .then((todos) => {
          res.send(todos);
        });
    })
    .catch((err) => {
      console.error("err");
    });
});

app.get("/tasks/:id", (req, res) => {
  client
    .then((data) => {
      console.log("connected");
      database = data.db(DBname);

      params = req.params.id;
      object = { id: Number(params) };
      console.log(object);
      database
        .collection(collection)
        .find(object)
        .toArray()
        .then((todos) => {
          res.send(todos);
        });
    })
    .catch((err) => {
      console.error("err");
    });
});

app.delete("/tasks/:id", (req, res) => {
  client
    .then((data) => {
      console.log("connected");
      database = data.db(DBname);

      params = req.params.id;
      object = { id: Number(params) };
      console.log(object);
      database
        .collection(collection)
        .deleteOne(object)
        .then((todos) => {
          res.send(todos);
        });
    })
    .catch((err) => {
      console.error("err");
    });
});

app.listen(PORT);
