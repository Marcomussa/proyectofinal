const usersController = {
    login: function(req, res){
        res.render('login')
    },
    wishlist: function(req, res){
        res.render('wishlist')
    }
}

module.exports = usersController