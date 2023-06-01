const express = require('express')
const router = express.Router()

const auth_controller = require('../controllers/authController')

router.post('/login', auth_controller.auth_login)
router.post('/register', auth_controller.auth_register)
router.post('/forgot', auth_controller.auth_forgot)
router.post('/delete', auth_controller.auth_delete)

module.exports = router