const express = require('express')
const router = express.Router()
const barangController = require('../controller/barangCtl')

router.get('/',barangController.viewPage)

module.exports = router;

