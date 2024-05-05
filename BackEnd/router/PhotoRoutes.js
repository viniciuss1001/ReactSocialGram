const express = require('express')
const router = express.Router()

//Controller
const {insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto, commentPhoto, searchPhotos} = require('../controllers/PhotoController')
//MiddleWares
const {photoInsertValidation, photoUpdateValidation, commentValidationInPhoto} = require('../middlewares/PhotoValidation')

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
router.get('/search', authGuard, searchPhotos)

router.get('/:id', authGuard, getPhotoById)
router.put('/:id', authGuard,photoUpdateValidation(), validate, updatePhoto)
router.put('/like/:id', authGuard, likePhoto)
router.put('/comment/:id', authGuard, commentValidationInPhoto(), validate, commentPhoto)


module.exports = router