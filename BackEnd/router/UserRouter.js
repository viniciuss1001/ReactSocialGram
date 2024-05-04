const express = require('express')
const router = express.Router()

//controller
const {registerUser,loginUser, getCurrentUser} = require('../controllers/UserController')

//middlewares
const validate = require('../middlewares/handleValidation')

const {userCreateValidate,loginValidator} = require('../middlewares/userValidations')
const authGuard = require('../middlewares/AuthGuard')

//routes
router.post('/register', userCreateValidate(),validate, registerUser)

router.post('/login',loginValidator, validate, loginUser)

router.get('/profile', authGuard, getCurrentUser)

module.exports = router