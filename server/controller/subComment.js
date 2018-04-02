var SubComment = require('./../models/subComment')
var comment = require('./../models/comment')
var mongoose = require('mongoose')

module.exports.new = function (req,res) {
    var newSubComment = new SubComment(req.body);
    newSubComment.save().then(function (doc){
        return comment.update({
            _id: req.body.replyTo   
        }, {
            $push:{
                replyList: doc._id
            }
        });
    }).then(function() {
        res.fin('发送评论成功');
    }).catch(function (err) {
        res.err(err);
    });
}