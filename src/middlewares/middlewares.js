const path = require('path')
const fs = require('fs')

module.exports = {
    seguimientoPaginas: function(req, res, next){
        fs.appendFileSync('seguimientoPaginas.txt', `${req.url}`)
        next()
    }
}