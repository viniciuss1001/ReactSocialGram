const express = require('express')
const router = express.Router()

//controller
const {registerUser,loginUser} = require('../controllers/UserController')

//middlewares
const validate = require('../middlewares/handleValidation')

const {userCreateValidate,loginValidator} = require('../middlewares/userValidations')

//routes
router.post('/register', userCreateValidate(),validate, registerUser)

router.post('/login',loginValidator, validate, loginUser)

module.exports = router