let productController = {
    cart: function(req, res){
        res.render('productCart') 
    },
    product: function(req, res){
        res.render('productDetail')
    },
    create: function(req, res){
        res.render('createProduct')
    }
}

module.exports = productController