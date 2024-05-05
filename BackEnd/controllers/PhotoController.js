const Photo = require('../models/Photo')
const mongoose = require('mongoose')
const User = require('../models/User')

//insert a photo, with an user related to it
const insertPhoto = async (req, res) => {

    const { title } = req.body
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
    if (!newPhoto) {
        res.status(422).json({
            Errors: ['Houve um problema, por favor tente mais tarde.']
        })
        return
    }
    res.status(401).json(newPhoto)
}

//remove a photo from db
const deletePhoto = async (req, res) => {
    const { id } = req.params

    const reqUser = req.user

    try {
        const photo = await Photo.findById(mongoose.Types.ObjectId(id))

        //check if photo exists
        if (!photo) {
            res.status(404).json({ Errors: ['Foto não encontrada.'] })
            return
        }

        //check if photo belongs to user
        if (!photo.userId.equals(reqUser.id)) {
            res.status(422).json({ Errors: ['Ocorreu um erro, por favor tente mais tarde.'] })
        }

        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({ id: photo._id, message: 'Foto excluída com sucesso.' })
    } catch (error) {
        res.status(404).json({ Errors: ['Foto não encontrada.'] })
        return
    }
}

//get all photos
const getAllPhotos = async(req, res) => {
    const allPhotos = await Photo.find({}).sort([['createdAt', -1]]).exec()

    return res.status(200).json(allPhotos)
}

//get user photos
const getUserPhotos = async(req, res) =>{
    const {id} = req.params
    const photos = await Photo.find({userId: id})
        .sort([['createdAt', -1]])
        .exec()

    return res.status(200).json(photos)

}

//get photo by id
const getPhotoById = async(req, res) => {

    const {id} = req.params

    const photo = await Photo.findById(mongoose.Types.ObjectId(id))

    //check if photo exists
    if(!photo){
        res.status(404).json({Errors: ['Foto não encontrada.']})
        return
    }

    res.status(200).json(photo)
}
//update the photo

const updatePhoto = async(req, res) =>{
    const {id} = req.params
    const {title} = req.body

    const reqUser = req.user

    const photo = await Photo.findById(id)

    //check if photo exists
    if(!photo){
        res.status(404).json({Errors: ['Imagem não encontrada.']})
        return
    }
    //check if photo belongs to user
    if(!photo.userId.equals(reqUser._id)){
        res.status(404).json({Errors: ['Ocorreu um erro, tente novamente mais tarde.']})
        return
    }

    if(title){
        photo.title = title
    }

    await photo.save()
    res.status(200).json({photo, message:'Foto atualizada com sucesso.'})
}
//like functionality
const likePhoto = async(req, res) => {
    const {id} = req.params
    const reqUser = req.user

    const photo = await Photo.findById(id)

    //check if photo exists
    if(!photo){
        res.status(404).json({Errors: ['Foto não encontrada']})
        return
    }
    
    //check if user already liked the photo
    if(photo.likes.includes(reqUser._id)){
        res.status(422).json({errors: ['Você já curtiu essa foto.']})
        return
    }

    //put id of user in likes array
    photo.likes.push(reqUser._id)

    photo.save()

    res.status(200).json({photoId: id, userId: reqUser._id, message:'A foto já foi curtida.'})
}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto
}