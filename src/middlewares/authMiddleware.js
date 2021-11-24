function authMiddleware(req, res, next) {
    if(!req.session.userlogued){
        return res.redirect('/')
    }
    next();
}

module.exports = authMiddleware;