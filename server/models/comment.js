var mongoose = require('mongoose')
var Schema = mongoose.Schema

var commentSchema = new mongoose.Schema({
	articId : {type: Number, required: true},
	date: {type: Date, default: Date.now},
    content: {type: String, required: true},
    userName: {type: String, required: true},
    webSite: String,
    email : {type: String, required: true},
    replyList: [{ type: Schema.Types.ObjectId, ref: 'SubComment' }], 
})

commentSchema.statics.findByArtic = function (id , cb) {
    this.find({"articId": id})
    .populate('replyList')
    .exec(cb);
}

module.exports = mongoose.model('Comment', commentSchema)