const path = require('path')

const controlador = {
    index: function(req, res){
        return res.sendFile(path.resolve(__dirname, '../views/index.html'))
    },
    login: function(req, res){
        return res.sendFile(path.resolve(__dirname, '../views/login.html'))
    },
    cart: function(req, res){
        return res.sendFile(path.resolve(__dirname, '../views/productCart.html'))
    },
    product: function(req, res){
        return res.sendFile(path.resolve(__dirname, '../views/productDetail.html'))
    },
    wishlist: function(req, res){
        return res.sendFile(path.resolve(__dirname, '../views/wishlist.html'))
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