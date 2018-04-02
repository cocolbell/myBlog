function _successJson (doc) {
    return {
        result : 'success',
        message : doc
    }
}
function _errJson (text) {
    return {
        result : 'fail',
        reason : text
    }
}
module.exports.httpReturn = function (req, res, next) {
    res.fin = function (doc) {
        res.json(_successJson(doc));
    }
    res.err = function (text) {
        res.json(_errJson(text));
    }
    next();
}

