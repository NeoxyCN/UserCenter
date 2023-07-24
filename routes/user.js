const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/userController')

router.get('/info', user_controller.user_info)

module.exports = router