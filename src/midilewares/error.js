const winston = require('winston')
module.exports = function(err,req,res,next){

    winston.error(err.message,err)
    // error
    // info
    // warn
     res.status(500).send(err.message)

}