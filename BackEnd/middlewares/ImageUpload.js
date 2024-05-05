const multer = require('multer')

const path = require('path')

//destination to store image
const imageStorage = multer.diskStorage({
     destination: function(req, file, callBack){
          let folder = ''

          if(req.baseUrl.includes('users')){
              folder = 'users' 
          }else if(req.baseUrl.includes('photos')){
               folder = 'photos'
          }
          callBack(null, `uploads/${folder}/`)
     },
     filename: function(req, file, callBack){
               callBack(null, Date.now() + path.extname(file.originalname))
     }
})

const imageUpload = multer({
     storage: imageStorage,

     fileFilter(req, file, callBack){
               if(file.originalname.match(/\.(png|jpg)$/)){
                    //upload image jpg or png formats
                    return callBack(new Error('Por favor insira imagens com formato png ou jpg.'))
               }
               callBack(undefined, true)

     }
})
module.exports = {
     imageUpload
}