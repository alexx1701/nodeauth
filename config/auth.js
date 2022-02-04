module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuth()){
            return next();
        }
        req.flash('error_msg', 'Please log in to view this page');
        res.redirect('/users/login');
    }
}