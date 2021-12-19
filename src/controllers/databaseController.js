let db = require('../database/models')

let controller = {
    products: (req, res) => {
        db.Product.findAll()
        .then( () => {
            res.render('productList')
        })
        .catch( (err) => console.log(err))
    },
    users: (req, res) => {
        db.Product.findAll()
        .then( () => {
            res.render('login')
        })
        .catch( (err) => console.log(err))
    }
}

module.exports = controller