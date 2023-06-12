const express = require('express')
const router = express.Router()

const auth_controller = require('../controllers/messageController')

router.post('/get', auth_controller.auth_login)
router.post('/read_all', auth_controller.auth_register)

module.exports = router