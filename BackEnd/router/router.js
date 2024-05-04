const express= require('express')

const router = express()

//test route
router.get('/', (req, res)=>{
     res.send('api is active')
})

module.exports = router