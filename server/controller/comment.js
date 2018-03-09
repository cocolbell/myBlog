var Comment = require('./../models/comment')
var mongoose = require('mongoose')

module.exports.new = function (req, res) {
    var newComment = new Comment(req.body);
    newComment.save(function (err, product) {    
        if (err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: '评论成功'});
        }
    });
}

module.exports.getByArtic = function (req, res) {
    Comment.findByArtic(req.query.articId).then(function(docs) {
        res.json({result: 'success', message: docs})
    }).catch(function(err) {
        res.json({result: 'fail', reason: err});
    })
}