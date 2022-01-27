
const  {Products}  = require("../database/models");

let mainController = {
    index: function (req, res, next){
        Products.findAll()
        .then((par) => {
            res.render('index', { productList: par}
        )})
        .catch(err => console.log(err))
    },
    payment: function(req, res){
        res.render('paymentMethods')
    }
}

module.exports = mainController