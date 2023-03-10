//jshint esversion:6

const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})
const express = require("express");

//configure express app
const app = express();
app.set('view engine', 'ejs');//use ejs
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))//add bootsrap css
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))//add bootsrap javascript
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))//add bootsrap jquery
app.set('views', path.join(__dirname, '../Client/views'));//show express the views directory
app.use(express.static(path.join(__dirname , '../Client/views')));//show express the Client directory
//app.use(seshOption)//configuration for express session
//app.use(express.static(path.join(__dirname , '../Client/views/styles')));//show express the Client directory//


app.get("/", (req, res) => {
    const error = "";
    res.render("passwordTRAINING",{error});
})
app.get("/success", (req, res) => {
    res.render("success");
})

app.post("/login",function(req, res){
    const value = "abc123"

    const password = req.body.Password;

    if(password == value){
        return res.render("success")
    }else{
        const error = "your stupid and cant swim"
        return res.render("passwordTRAINING",{error})
    }
});

app.listen(3000, ()=> {
    console.log("Server started on port 3000");
})