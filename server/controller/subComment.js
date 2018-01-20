var SubComment = require('./../models/subComment')
var comment = require('./../models/comment')
var mongoose = require('mongoose')

module.exports.new = function (req,res) {
    var newSubComment = new SubComment(req.body);
    newSubComment.save().then(function (doc){
        comment.update({
            _id: req.body.replyId    
        }, {
            $push:{
                replyList: doc._id
            }
        },function (err) {          
            if(err) res.json({result: 'fail', reason: err});
            else res.json({result: 'success', message: '发送评论成功'});        
        });
    }).catch(function (err) {
        console.log(err)
    });
}