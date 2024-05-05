const express = require('express')
const router = express.Router()

//Controller
const {insertPhoto, deletePhoto, getAllPhotos, getUserPhotos} = require('../controllers/PhotoController')
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

router.delete('/:id', authGuard, deletePhoto)
router.get('/', authGuard, getAllPhotos)
router.get('/user/:id', authGuard, getUserPhotos)


module.exports = router