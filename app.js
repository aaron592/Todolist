const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
let items = ["Bible reading" , "Learning" , "Exercise"];
const app = express();

app.set('view engine', 'ejs');

let ejs = require('ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
    
    let today = new Date();
    let options = {
        weekday: "long" ,
        day: "numeric",
    month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
   
    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(https://aaron592.github.io/Todolist/, function(){
    console.log("Server started on port 3000");
});
