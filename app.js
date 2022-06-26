const express = require("express") //declare menggunakan Framework Express
const bodyParser = require("body-parser")
const session = require("express-session")
const {v4:uuidv4} = require("uuid")
const dbconn = require("./config/db")

const routerLogin = require("./routes/login")


var app = express() //init App sebagai web app Framework Express 
var port = "8080" //init port di web app

app.set('view engine','ejs') //fungsi penggunaan view engine ejs

app.use(express.static(__dirname+"/public"))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

//Parsing body request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(express.json())
//app.use(express.urlencoded({extended: true}))
//app.use(methodOverride("_method"))

//Routing
app.use("/login" ,routerLogin)

app.use((req,res)=>{
    res.status(404);
    res.send('<h1>404, Halaman website tidak ditemukan</h1>');
})

app.use(function(req,res,next){
    req.dbconn=dbconn
    next()
})

app.listen(port, ()=>{
    console.log(`Aplikasi sedang berjalan di hhtp://127.0.0.1:${port}`)
})