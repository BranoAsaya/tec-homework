const express = require("express");
const axios = require("axios");
const hbs = require("hbs");
const path = require("path");
const app = express();
const PORT = 8080;
const API_KEY = process.env.OPEN_WEATHER_API_KEY;

const publicPath = path.join(__dirname, "..", "public");
const viewsPath = path.join(__dirname, "..", "templates", "views");
const partialsPath = path.join(__dirname, "..", "templates", "partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    if(req.query.city){
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${API_KEY}`;
  try {
    axios
      .get(url)
      .then((rec) => {
        let latitude = rec.data.coord.lat;
        let longitude = rec.data.coord.lon;
     
          res.render("index", {
            title: "Home",
            main: true,
            search:true,
            result: true,
            lat: latitude,
            lon: longitude,
          });
        
      })
      .catch((err) => {
        console.error("axios error");
      })
      .then(() => {});
  } catch (err) {
    console.error("link error");
  }
}
else{
  res.render("index", {
    title: "Home",
    main: true,
    search:true,
  });
 } 
});
app.get("/About", (req, res) => {
  res.render("index", {
    title: "About",
    main: true,
  });
});
app.get("/Help", (req, res) => {
  res.render("index", {
    title: "Help",
    main: true,
  });
});
app.get("*", (req, res) => {
  res.render("index", {
    title: "404",
  });
});

app.listen(PORT);
