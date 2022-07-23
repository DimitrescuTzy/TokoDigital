const express = require('express')
const router = express.Router()
const dashboardController = require('../controller/dashboardCtl')

router.get('/',dashboardController.viewPage)

module.exports = router
