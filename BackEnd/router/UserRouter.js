const express = require('express')
const router = express.Router()

//controller
const {registerUser} = require('../controllers/UserController')

//middlewares
const validade = require('../middlewares/handleValidation')

//routes
router.post('/register',validade, registerUser)

module.exports = router