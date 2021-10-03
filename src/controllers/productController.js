const controlador = {
    index: function(req, res){
        res.sendFile(__dirname +'/src/views/index.html')
    },
    login: function(req, res){
        res.sendFile(__dirname + '/src/views/login.html')
    },
    cart: function(req, res){
        res.sendFile(__dirname +'/src/views/productCart.html')
    },
    product: function(req, res){
        res.sendFile(__dirname + '/src/views/productDetail.html')

    },
    wishlist: function(req, res){
        res.sendFile(__dirname + '/src/views/wishlist.html')
    },
    default: function(req, res){
        res.send('Ruta Por Default')
    }
}


module.exports = controlador