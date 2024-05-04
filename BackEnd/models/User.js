const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
     name: String,
     email: String,
     passWord: String,
     prfileImage: String, 
     profileBiography: String
},{
     timestamps: true
     //when is true, create two camps, a date of creation of user, and date of his update
})

const User = mongoose.model('User', userSchema)

module.exports = User