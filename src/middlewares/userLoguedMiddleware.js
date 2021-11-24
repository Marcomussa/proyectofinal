const User = require('../models/User')

function userLoguedMiddleware(req, res, next) {
    res.locals.isLogued = false;

    let emailInCookie = req.cookies.Email;
    let userFromCookie = User.findByField('email', emailInCookie);

    console.log(userFromCookie);

    if( userFromCookie) {
        req.session.userLogued = userFromCookie; 
    }

    if(req.session.userLogued) {
        res.locals.isLogued = true;
        res.locals.userLogued = req.session.userLogued;
    }


    next();
}

module.exports = userLoguedMiddleware;