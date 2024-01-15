const express = require("express")
require('express-async-errors')
const winston = require('winston')

const error = require('./src/midilewares/error')


const connected = require('./src/models/config')
const routes = require('./src/routes/index')

const app=express()

app.use(express.json())

const PORT = process.env.PORT || 3000

connected()
app.use('/api',routes)
app.use(error)
// winston.add(new winston.transport.File({filename:"logfile.log"}))
winston.add(new winston.transports.File({filename:"logfile.log"}))



app.get('',(req,res)=>{
  res.send("hello world")

})

app.listen(PORT,()=>{
    console.log(`server is runing http://localhost:${PORT}`);
})
