const User = require('../models/User')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')

const jwtSecret = process.env.JWT_PASSWORD

//generate user token

const generateUserToken = (id) => {
     return jwt.sign({ id }, jwtSecret, {
          expiresIn: '7d'
     })
}

//regiter user and singin
const registerUser = async (req, res) => {
     const { email, name, password } = req.body

     //check if user exist
     const userExists = await User.findOne({ email })

     if (User) {
          res.status(422).json({ errors: ['Por favor, utilize outro email.'] })
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
     if (!newUser) {
          res.status(422).json({ errors: ['Houve um erro inesperado.'] })
          return
     }

     res.status(201).json({
          _id: newUser._id,
          token: generateUserToken(newUser._id)
     })
}

//sing user in
const loginUser = async (req, res) => {
     const { email, password } = req.body

     const user = await User.findOne({ email })

     //check if user exists
     if (!user) {
          res.status(404).json({ errors: ['Usuário não encontrado.'] })
          return
     }

     //check if password is correct
     if (!(await bcrypt.compare(password, user.password))) {
          res.status(4004).json({ errors: ['Senha inválida.'] })
          return
     }
     //return user with token
     res.status(201).json({
          _id: user._id,
          profileImage: user.profileImage,
          token: generateUserToken(user._id)
     })
}

//get current loggend in user
const getCurrentUser = async (req, res) => {
     const user = req.user

     res.status(200).json(user)
}

//update an user
const update = async (req, res) => {
     const { name, password, profileBiography } = req.body

     let profileImage = null

     if (req.file) {
          profileImage = req.file.filename
     }
     const userOfThisReq = req.user

     const user = await User.findById(mongoose.Types.ObjectId(userOfThisReq._id)).select('-password')

     if (name) {
          user.name = name
     }
     if (password) {
          //generate a password hash
          const salt = await bcrypt.genSalt()
          const passwordEncript = await bcrypt.hash(password, salt)

          user.password = passwordEncript
     }
     if (profileImage) {
          user.profileImage = profileImage
     }
     if (bio) {
          user.profileBiography = bio
     }

     await user.save()

     res.status(200).json(user)

}

//get user by id
const getUserById = async (req, res) => {
     const { id } = req.params

     try {
          const user = await User.findById(mongoose.Types.ObjectId(id)).select('-password')

          //check user if exists
          if (!user) {
               res.status(404).json({ Errors: ['Usuário não encontrado.'] })
               return
          }

          res.status(200).json(user)

     } catch (error) {
          res.status(404).json({ error: ['Usuário não encontrado.'] })
          return
     }
}

module.exports = {
     generateUserToken,
     registerUser,
     loginUser,
     getCurrentUser,
     update,
     getUserById
}