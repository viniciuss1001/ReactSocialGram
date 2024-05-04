const express = require('express')
const router = express.Router()

//controller
const {registerUser} = require('../controllers/UserController')

//routes
router.post('/register', registerUser)

module.exports = router