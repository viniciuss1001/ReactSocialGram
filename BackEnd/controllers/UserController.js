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
     const {email, name, password} = req.body

     //check if user exist
     const userExists = await User.findOne({email})

     if(user){
          res.status(422).json({errors: ['Por favor, utilize outro email.']})
          return
     }
     //generate password hash
     const saltBcrypt = await bcrypt.genSalt()
     const passwordEncript = await bcrypt.hash(password, saltBcrypt)

     //create User
     const newUser = await User.create({
          name, 
          email,
          password: passwordEncript
     })

     //if user was created sucefull, return the token
     if(!newUser){
          res.status(422).json({errors: ['Houve um erro inesperado.']})
          return
     }

     res.status(201).json({
          _id: newUser._id,
          token: generateUserToken(newUser._id)
     })
}

//sing user in
const loginUser = async(req, res) =>{
     const {email, senha} = req.body

     const user = await User.findOne({email})

     //check if user exists
     if(!user){
          res.status(404).json({errors: ['Usuário não encontrado.']})
          return
     }

     //check if password is correct
     if(!(await bcrypt.compare(password, user.password))){
          res.status(4004).json({errors: ['Senha inválida.']})
          return
     }
     //return user with token
     res.status(201).json({
          _id: user._id,
          profileImage: user.profileImage,
          token: generateUserToken(user._id)
     })
}

module.exports = {
     generateUserToken, 
     registerUser,
     loginUser
}