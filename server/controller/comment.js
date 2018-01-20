var Comment = require('./../models/comment')
var mongoose = require('mongoose')

module.exports.new = function (req,res) {
    console.log(req.body)
    var newComment = new Comment(req.body);
    newComment.save(function (err , product) {    
        if (err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: '评论成功'});
        }
    });
}

module.exports.getByArtic = function (req,res) {
    console.log(req.query.articId)
    Comment.findByArtic(req.query.articId , function (err , docs){
        if (err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: docs});
        }
    })
}