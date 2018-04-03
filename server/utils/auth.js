var token = require('./token')

module.exports.auth = function (req, res, next) {   
    if(req.body && req.body.auth) {
        var auth = req.body.auth;
        if(token.checkToken(auth)) {
            next();
        }else res.err('unauthorized!', 0)
    }
    else {
        res.err('您没有权限执行此操作！')
    }
}