const express = require('express')
const router = express.Router()
const loginController = require('../controller/login')

router.get('/',loginController.login)

// router.post('/',(req,res)=>{
//     if(req.body.email == null){

//     }
// })
// router.get("/",(req,res)=>{res.render('login');})
// router.get("/dashboard")





module.exports = router;