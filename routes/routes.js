const express = require('express')
const router = express.Router()


router.get("/",(req,res)=>{
    res.render('login');
})

router.use((req,res)=>{
    res.status(404);
    res.send('<h1>404, Halaman website tidak ditemukan</h1>');
})

module.exports = router;