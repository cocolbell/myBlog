var Article = require('./../models/article')
var mongoose = require('mongoose')


module.exports.new = function(req, res){   
    var defaultId = 1;
    Article.findLast().then(function(docs){
        if (docs) {
            defaultId = ++docs.articId;
        }
        req.body.articId = defaultId;
        return new Article(req.body);
    }).then(function(articleEntity){
        return articleEntity.save();
    }).then(function(){
        res.fin("发布文章成功");
    }).catch(function(err){
        res.err(err);
    });
}

module.exports.delete = function (req, res) {
    Article.remove({"articId":req.body.id}, function (err) {
        err ? res.err(err) : res.fin('删除文章成功')
    })
}

module.exports.edit = function (req, res) {
    var updates = req.body.updates;
    Article.editById(req.body.id, updates)
        .then(function (doc) {
            res.fin('更新文档成功')
        }).catch(function (err) {
            res.err(err)
        })
}

module.exports.findAll = function (req, res) {
    Article.find(function(err, data){
        if (err) {
            res.err(err);
        }
        else {
            res.fin(data);
        }
    })  
}

module.exports.findById = function (req, res) {
    var artic = null;
    var artics = null;
    Article.find({"articId":req.query.id})
    .then(function (doc) {
        artic = doc;
        var prev = Article.find({'articId' :{ "$lt" : req.query.id} }).sort({'articId':-1}).limit(1);
        var next = Article.find({'articId' :{ "$gt" : req.query.id} }).sort({'articId':1}).limit(1);      
        return Promise.all([prev , next]);
    }).then(function (results) {
        var context = new Array();
        context.push(results[0][0]);
        context.push(results[1][0]);
        var docs = {
            content : artic,
            context : context
        }
        artics = docs;
        var num = ++artic[0].viewNum;
        return Article.update({articId:req.query.id}, { viewNum: num})
    }).then(function (newDoc) {
        res.fin(artics);        
    }).catch(function(err) {
        console.log(err)
        res.err(err);
    })
}

module.exports.likeAdd = function (req, res) {
    Article.find({"articId":req.query.id})
    .then(function (doc) {
        var num = ++doc[0].likeNum;
        return Article.update({articId:req.query.id}, { likeNum: num})
    }).then(function (newDoc) {
        res.fin("like + 1");
    })
    .catch(function (err) {
        console.log(err)
        res.err(err);
    })
}

module.exports.findByPage = function (req, res) {
    Article.findByPage(req.query.page).then(function(docs) {
        res.fin(docs);
    }).catch(function(err) {
        res.err(err);
    })
}

module.exports.getPageNum = function (req, res) {
    Article.find(function(err, docs){
        var num = parseInt(docs.length/4);
        if (err) {
            res.err(err);
        }
        else {
            res.fin(num);
        }
    })  
}

module.exports.findAllTags = function (req, res) {
    Article.findAllFileds('tags').then(function(docs) {
        var tags = new Array();
        docs.forEach(function(element) {
            tags = tags.concat(element.tags)  //数组拼接
        });
        tags = Array.from(new Set(tags)) //数组去重
        res.fin(tags);
    }).catch(function(err) {
        res.err(err);
    })
}

module.exports.findAllCategory = function (req, res) {
    Article.findAllFileds('category').then(function(docs) {
        var category = new Array();
        docs.forEach(function(element) {
            category.push(element.category)  //数组拼接
        });
        category = Array.from(new Set(category)) //数组去重
        res.fin(category);
    }).catch(function(err) {
        res.err(err);
    });
}

module.exports.findByTag = function (req, res) {
    Article.findByTag(req.query.tagName).then(function(docs) {
        res.fin(docs);
    }).catch(function(err) {
        res.err(err);
    });
}

module.exports.findByCate = function (req, res) {
    Article.findByCate(req.query.cateName).then(function(docs) {
        res.fin(docs);
    }).catch(function(err) {
        res.err(err);
    });
}

module.exports.findByMonth = function (req, res) {
    Article.findByMonth(req.query.year, req.query.month).then(function(docs) {
        res.fin(docs);
    }).catch(function(err) {
        res.err(err);
    });
}
