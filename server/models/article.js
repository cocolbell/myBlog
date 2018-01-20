
var mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
	articId : Number,
	title: String,
	date: {type: Date, default: Date.now},
	content: String,
	contentPrev: String,
	tags: Array,
	category: String,
	viewNum: Number,
	likeNum: Number
})

articleSchema.statics.findLast = function () {
	return this.findOne().sort({'articId':-1});
}

articleSchema.statics.findByPage = function (page,cb) {
	page -= 1
	this.find({})
	.skip(page * 5)
	.limit(5)
	.sort({'_id':-1})
	.exec(cb)
}

articleSchema.statics.findAllFileds = function (filed,cb) {
	this.find({})
	.select('-_id ' + filed) //去掉默认的_id 只查找tags字段
	.exec(cb)
}

module.exports = mongoose.model('Article', articleSchema)