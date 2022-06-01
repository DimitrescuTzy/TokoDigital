var express = require("express")
var app = express()
var port = "8080"

app.get("/", function(req,res){
    return res.send("Hello-World")
    
})

app.listen(8080, function(){
    console.log(`Aplikasi sedang berjalan di hhtp://127.0.0.1:${port}`)
})