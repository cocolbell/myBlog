
var mongoose = require('mongoose')

var tagSchema = new mongoose.Schema({
    tagName: String
})

module.exports = mongoose.model('Tag', tagSchema)