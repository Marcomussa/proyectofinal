const path = require('path')

const controlador = {
    index: function(req, res){
        return res.render(path.resolve(__dirname, '../views/index.ejs'))
    },
    login: function(req, res){
        return res.render(path.resolve(__dirname, '../views/login.ejs'))
    },
    cart: function(req, res){
        return res.render(path.resolve(__dirname, '../views/productCart.ejs'))
    },
    product: function(req, res){
        return res.render(path.resolve(__dirname, '../views/productDetail.ejs'))
    },
    create: function(req, res){
        return res.render(path.resolve(__dirname, '../views/createProduct.ejs'))
    },
    wishlist: function(req, res){
        return res.render(path.resolve(__dirname, '../views/wishlist.ejs'))
    },
    head: function(req, res){
        return res.render('head.ejs')
    },
    nav: function(req, res){
        return res.render('nav.ejs')
    },
    footer: function(req, res){
        return res.render('footer.ejs')
    }
}


module.exports = controlador