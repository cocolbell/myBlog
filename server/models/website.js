var mongoose = require('mongoose')

var webSiteSchema = new mongoose.Schema({
    viewNum : {type: Number, default: 0},
})

module.exports = mongoose.model('webSite', webSiteSchema)