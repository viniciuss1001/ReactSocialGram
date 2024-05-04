const User = require('../models/User')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_PASSWORD

//generate user token

const generateUserToken = (id) =>{
     return jwt.sign({id}, jwtSecret, {
           expiresIn: '7d'    
     })
}

//regiter user and singin
const registerUser = async(req, res) => {
     res.send('registrado')
}

module.exports = {
     generateUserToken, 
     registerUser
}