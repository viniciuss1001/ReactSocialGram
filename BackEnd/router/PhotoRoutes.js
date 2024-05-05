const express = require('express')
const router = express.Router()

//Controller

//MiddleWares
const {photoInsertValidation} = require('../middlewares/PhotoValidation')

const authGuard = require('../middlewares/AuthGuard')

const validate = require('../middlewares/handleValidation')

//Routes

module.exports = router