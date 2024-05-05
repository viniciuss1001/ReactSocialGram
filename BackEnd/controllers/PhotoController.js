const Photo = require('../models/Photo')
const mongoose = require('mongoose')
const User = require('../models/User')

//insert a photo, with an user related to it
const insertPhoto = async(req, res) =>{
    
    const {title} = req.body
    const image = req.file.filename

    const reqUser = req.user 

    const user = await User.findById(reqUser._id)
    
    //create a photo
    const newPhoto = await Photo.create({
          image, 
          title, 
          userId: user._id,
          userName: user.name     
    })
    
    //if photo was created sucesfull
    if(!newPhoto){
        res.status(422).json({
            Errors: ['Houve um problema, por favor tente mais tarde.']
        })
        return
    }
    res.status(401).json(newPhoto)
}

//remove a photo from db
const deletePhoto = async(req, res) =>{
    const {id} = req.params

    const reqUser = req.user
    const photo = Photo.findById(mongoose.Types.ObjectId(id))

    //check if photo exists
    if(!photo){
        res.status(404).json({Errors: ['Foto não encontrada.']})
        return
    }

    //check if photo belongs to user
    
}

module.exports = {
     insertPhoto
}