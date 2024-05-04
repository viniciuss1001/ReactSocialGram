require('dotenv').config()


const express = require('express')
const path = require('path')
const cors = require('cors')


const port = process.env.DEV_PORT
const frontPort = process.env.FRONT_END_PORT



const app = express()

//config em json and form data response

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//solve cors
app.use(cors({credentials: true, origin: `http:localhost:${frontPort}`}))

//upload directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//DB conection
require('./config/db.js')

//routes
const router = require('./router/router')
app.use(router)


app.listen(port, ()=>{
     console.log(`App rodando na porta ${port}`)
})
