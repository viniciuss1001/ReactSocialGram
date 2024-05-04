const {body} = require('express-validator')

const userCreateValidate = ( ) => {
     return [
               body('name').isString().withMessage('O nome é obrigatório')
     ]
}