const express = require("express");
const app = express();
const PORT = 8080;
const hbs = require("express-handlebars");

app.engine("handlebars", hbs({defaultLayout:'main'}));
app.set('view engine','handlebars')

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT);
