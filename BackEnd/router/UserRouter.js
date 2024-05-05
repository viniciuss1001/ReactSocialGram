const express = require('express')
const router = express.Router()

//controller
const {registerUser,loginUser, getCurrentUser, update, getUserById} = require('../controllers/UserController')

//middlewares
const validate = require('../middlewares/handleValidation')

const {userCreateValidate,loginValidator, userUpdateValidation} = require('../middlewares/userValidations')
const authGuard = require('../middlewares/AuthGuard')
const imageUpload = require('../middlewares/ImageUpload')

//routes
router.post('/register', userCreateValidate(),validate, registerUser)

router.post('/login',loginValidator, validate, loginUser)

router.get('/profile', authGuard, getCurrentUser)

router.put('/', authGuard, userUpdateValidation(), validate, imageUpload.single('profileImage'), update)

router.get(`/:id`, getUserById )

module.exports = router