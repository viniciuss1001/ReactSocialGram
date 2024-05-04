const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassWord = process.env.DB_PASSWORD


const connectionDB = async () =>{
     try {
          const dbConnection = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassWord}@cluster0.ei4ztmo.mongodb.net/`)

          console.log('conection for db is sucessfull!')

          return dbConnection
     } catch (error) {
          console.log(error)
     }
}
connectionDB()

module.exports = connectionDB