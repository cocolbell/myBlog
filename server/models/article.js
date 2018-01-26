
var mongoose = require('mongoose')

var pageCount = 4;

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
	.skip(page * pageCount)
	.limit(pageCount)
	.sort({'_id':-1})
	.exec(cb)
}


articleSchema.statics.findAllFileds = function (filed,cb) {
	this.find({})
	.select('-_id ' + filed) //去掉默认的_id 只查找tags字段
	.exec(cb)
}

articleSchema.statics.findByTag = function (tagVal,cb) {
	this.find({})
	.where('tag')
	.in([tagVal])
	.exec(cb)
}

articleSchema.statics.findByCate = function (cateVal,cb) {
	this.find({})
	.where('category')
	.in(cateVal)
	.exec(cb)
}

articleSchema.statics.findByMonth = function (year,month,cb) {
	var nextMonth = month == 12 ? 1: (parseInt(month) + 1);
	this.find({})
	.where('date')
	.gt(new Date(year + '-' + month + '-1 00:00:00'))
	.lt(new Date(year + '-' + nextMonth + '-1 00:00:00'))
	.exec(cb)
}


module.exports = mongoose.model('Article', articleSchema)