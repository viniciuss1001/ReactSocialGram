const { body } = require('express-validator')

const userCreateValidate = () => {
     return [
          body('name')
               .isString()
               .withMessage('O nome é obrigatório')
               .isLength({ min: 3 })
               .withMessage('O nome precisa ter no mínimo três caracteres'),

          body('email')
               .isString()
               .withMessage('O email é obrigatório')
               .isEmail()
               .withMessage('Por favor, insira um e-mail válido.'),

          body('password')
               .isString()
               .withMessage('A senha é obrigatória.')
               .isLength({min: 5})
               .withMessage('A senha deve conter no mínimo 5 caracteres.'),

          body('confirmPassword')
          .isString()
          .withMessage('A confirmação de senha é obrigatória.')
          .isLength({min: 5})
          .custom((value, {req}) => {
               if(value != req.body.password){
                    throw new Error('As senhas não coincidem.')
               }
               return true
          })

     ]
}

const loginValidator = () => {
     return[
          body('email')
               .isString()
               .withMessage('O email é obrigatório.')
               .isEmail()
               .withMessage('Insira um email válido.'),

          body('password')
               .isString()
               .withMessage('A senha é obrigatória.')
     ]
}

module.exports = {
     userCreateValidate,
     loginValidator
}