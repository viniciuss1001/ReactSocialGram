const {validationResult} = require('express-validator')

const validate = (req, res, next) =>{
//errors validation
     const errors = validationResult(req)

     if(errors.isEmpty()){
               return next()
     }
     const extratedErros = []

     errors.array().map((error)=> extratedErros.push(error.msg))

     return res.status(422).json({
               errors: extratedErros
     })
}

module.exports = validate