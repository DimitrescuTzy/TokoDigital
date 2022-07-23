const express = require('express')
const router = express.Router()
const memberController = require('../controller/memberCtl')

router.get('/',memberController.viewPage)

module.exports = router