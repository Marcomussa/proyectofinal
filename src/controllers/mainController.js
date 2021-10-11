let mainController = {
    index: function(req, res){
        res.render('index')
    },
    wishlist: function(req, res){
        res.render('wishlist')
    }
}

module.exports = mainController