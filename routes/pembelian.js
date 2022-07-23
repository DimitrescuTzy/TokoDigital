const express = require('express')
const router = express.Router()
const pembelianController = require('../controller/pembelianCtl')

router.get('/',pembelianController.viewPage)

module.exports = router