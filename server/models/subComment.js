var mongoose = require('mongoose')

var subCommentSchema = new mongoose.Schema({
	date: {type: Date, default: Date.now},
    content: {type: String, required: true},
    userName: {type: String, required: true},
    replyTo: {type: String, required: true},
    webSite: String
})

module.exports = mongoose.model('SubComment', subCommentSchema)