const express = require('express')
const router = express.Router()

//controller
const {registerUser} = require('../controllers/UserController')

//middlewares
const validade = require('../middlewares/handleValidation')

const {userCreateValidate} = require('../middlewares/userValidations')

//routes
router.post('/register', userCreateValidate(),validade, registerUser)

module.exports = router