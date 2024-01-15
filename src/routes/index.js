const express = require("express")
const users = require('./usersRoute')
const Genere = require('./genereRoute')
const auth = require('./authRoute')
const radies = require('./radisRoute')


const router = express.Router()

router.use('/users',users)
router.use('/genere',Genere)
router.use('/auth',auth)
router.use('/redis',radies)


module.exports=router;





