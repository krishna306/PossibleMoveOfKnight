const express = require("express");
const bodyParser =  require("body-parser"); 
const ejs  = require("ejs");
const app = express();
const path = require("path");
const console = require("console");


app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"/public")));

const port =  process.env.PORT || 5000;
app.get("/",function(req,res){
    res.render("home");
});
app.listen(port,function(){
    console.log('Server running on 5000');
});