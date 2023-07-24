const express = require('express')
const router = express.Router()

const bbs_controller = require('../controllers/bbsController')

router.get('/', bbs_controller.readList)
router.get('/read', bbs_controller.read)


module.exports = router