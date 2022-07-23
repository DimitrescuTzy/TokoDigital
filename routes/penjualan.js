const express = require('express')
const router = express.Router()
const penjualanController = require('../controller/penjualanCtl')

router.get('/',penjualanController.viewPage)

module.exports = router