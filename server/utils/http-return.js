function _successJson (doc) {
    return {
        result : 'success',
        message : doc
    }
}
function _errJson (text, code) {
    return {
        errCode : code || 1,
        result : 'fail',
        reason : text
    }
}
module.exports.httpReturn = function (req, res, next) {
    res.fin = function (doc) {
        res.json(_successJson(doc));
    }
    res.err = function (text, code) {
        res.json(_errJson(text, code));
    }
    next();
}

