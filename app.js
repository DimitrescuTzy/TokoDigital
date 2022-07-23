const express = require("express") //declare menggunakan Framework Express
const bodyParser = require("body-parser")
const session = require("express-session")
const {v4:uuidv4} = require("uuid")
const dbconn = require("./config/db")

const routesLogin = require("./routes/login")
const routesDashboard = require("./routes/dashboard")
const routesBarang = require("./routes/barang")
const routesMember = require("./routes/member")
const routesKaryawan = require("./routes/karyawan")
const routesPenjualan = require("./routes/penjualan")
const routesPembelian = require("./routes/pembelian")


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
app.use("/login" ,routesLogin)
app.use("/dashboard" ,routesDashboard)
app.use("/barang" ,routesBarang)
app.use("/member" ,routesMember)
app.use("/karyawan" ,routesKaryawan)
app.use("/penjualan" ,routesPenjualan)
app.use("/pembelian" ,routesPembelian)

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