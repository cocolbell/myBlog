
var mongoose = require('mongoose')

var pageCount = 4;

var articleSchema = new mongoose.Schema({
	articId : {type: Number, required: true},
	title: {type: String, required: true},
	date: {type: Date, default: Date.now, required: true},
	content: {type: String, required: true},
	contentPrev: {type: String, required: true},
	tags: {type: Array, required: true},
	category: {type: String, required: true},
	viewNum: {type: Number, default: 0, required: true},
	likeNum: {type: Number, default: 0, required: true}
})

articleSchema.statics.findLast = function () {
	return this.findOne()
				.sort({'articId':-1})
				.exec();
}

articleSchema.statics.editById = function (id, updates) {
	return this.find({'articId': id})
				.update(updates)
				.exec();
}

articleSchema.statics.findByPage = function (page) {
	page -= 1;
	return this.find({})
				.skip(page * pageCount)
				.limit(pageCount)
				.sort({'_id':-1})
				.exec()
}


articleSchema.statics.findAllFileds = function (filed) {
	return this.find({})
				.select('-_id ' + filed) //去掉默认的_id 只查找tags字段
				.exec()
}

articleSchema.statics.findByTag = function (tagVal) {
	return this.find({})
				.where('tags')
				.in([tagVal])
				.exec()
}

articleSchema.statics.findByCate = function (cateVal) {
	return this.find({})
				.where('category')
				.in(cateVal)
				.exec()
}

articleSchema.statics.findByMonth = function (year,month) {
	var nextMonth = month == 12 ? 1: (parseInt(month) + 1);
	return this.find({})
					.where('date')
					.gt(new Date(year + '-' + month + '-1 00:00:00'))
					.lt(new Date(year + '-' + nextMonth + '-1 00:00:00'))
					.exec()
}


module.exports = mongoose.model('Article', articleSchema)