const express = require('express')
const router = express.Router()
const karyawanController = require('../controller/karyawanCtl')

router.get('/',karyawanController.viewPage)

module.exports = router