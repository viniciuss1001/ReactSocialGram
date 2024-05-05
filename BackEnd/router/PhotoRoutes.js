const express = require('express')
const router = express.Router()

//Controller
const {insertPhoto} = require('../controllers/PhotoController')
//MiddleWares
const {photoInsertValidation} = require('../middlewares/PhotoValidation')

const authGuard = require('../middlewares/AuthGuard')

const validate = require('../middlewares/handleValidation')

const {imageUpload} = require('../middlewares/ImageUpload')

//Routes
router.post('/', 
     authGuard, 
     imageUpload.single('image'), 
     photoInsertValidation(), 
     validate, 
     insertPhoto)


module.exports = router