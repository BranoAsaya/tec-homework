const express = require("express");
const path = require("path"),
  app = express(),
  PORT = 8080;
const hbs = require("express-handlebars");
const date = new Date();

const eventsArr = () => {
  return [
    { event: "party", time: "07:00" },
    { event: "show", time: "12:00" },
  ];
};
const array = eventsArr()
console.log(array);

app.set("view engine", "hbs");
app.engine(
  "hbs",
  hbs({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: "hbs",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", {
    style: "./CSS/style.css",
    title: "Home",
    time: date.getFullYear(),
    action:true,
    send:'/Events',
  });
  
});
app.get("/About", (req, res) => {

  res.render("main", {
    style: "./CSS/style.css",
    title: "About",
    time: date.getFullYear(),
    delete:'delete',
    action:true,
    send:'/Form',
  });
});
app.get("/Contact", (req, res) => {
  res.render("main", {
    style: "./CSS/style.css",
    title: "Contact",
    time: date.getFullYear(),
  });
});
app.get("/Courses", (req, res) => {
  res.render("main", {
    style: "./CSS/style.css",
    title: "Courses",
    time: date.getFullYear(),
  });
});
app.get("/Mentoring", (req, res) => {
  res.render("main", {
    style: "./CSS/style.css",
    title: "Mentoring",
    time: date.getFullYear(),
  });
});
app.get("/Testimonials", (req, res) => {
  res.render("main", {
    style: "./CSS/style.css",
    title: "Testimonials",
    time: date.getFullYear(),
  });
});
app.get("/Events", (req, res) => {
  array.push(req.query)
  res.render("main", {
    style: "./CSS/style.css",
    title: "Events",
    time: date.getFullYear(),
    events: array,
    input:req.query,
  });
  console.log(array);
  });
  app.get("/Form", (req, res) => {
    if (array.find((arg) => arg.event === req.query.event && req.query)) {
      objI = array.findIndex((obj) => obj.name == req.query.event);
      array.splice(objI, 1)
    }
    res.render("main", {
      style: "./CSS/style.css",
      title: "Events",
      time: date.getFullYear(),
      events: array,
      
    });
    });

app.get("*", (req, res) => {
  res.render("main", {
    style: "./CSS/Error404",
    title: "404",
    time: date.getFullYear(),
  });
});

app.listen(PORT, () => {
  console.log(`server listens on port : ${PORT}`);
});
