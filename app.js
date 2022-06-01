const express = require("express"); //declare menggunakan Framework Express
const router = require("./routes/routes");

var app = express() //init App sebagai web app Framework Express 
var port = "8080" //init port di web app

app.set('view engine','ejs'); //fungsi penggunaan view engine ejs

app.use(router);

app.listen(port, ()=>{
    console.log(`Aplikasi sedang berjalan di hhtp://127.0.0.1:${port}`)
})