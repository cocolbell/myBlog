var Article = require('./../models/article')
var mongoose = require('mongoose')

var Promise = require("bluebird")
Promise.promisifyAll(Article);


var articleNew = function(req,res){   
    var defaultId = 1;
    Article.findLast().then(function(result){
        if (result) {
            defaultId = ++result.articId;
        }
        req.body.articId = defaultId;
        var newArticle = new Article(req.body);
        newArticle.save(function (err) {    
            if (err) {
                res.json({result: 'fail', reason: err});
            }
            else {
                res.json({result: 'success', message: '发布文章成功'});
            }
        });
    }).catch(function(err){
        res.json({result: 'fail', reason: err});
    });
}

var articleFindAll = function(req,res){
    Article.find(function(err,data){
        if (err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: data});
        }
    })  
}

var articleFindById = function(req,res){
    Article.find({"articId":req.query.id},function(err,docs){
        if (err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            var prev = Article.find({'articId' :{ "$lt" : req.query.id} }).sort({'articId':-1}).limit(1);
            var next = Article.find({'articId' :{ "$gt" : req.query.id} }).sort({'articId':-1}).limit(1);
            Promise.all([prev , next]).then(function (results) {
                var context = new Array();
                context.push(results[0][0]);
                context.push(results[1][0]);
                var results = {
                    content : docs,
                    context : context
                }
                res.json({result: 'success', message: results});
            }).catch(function(err){
                res.json({result: 'fail', reason: err});     
            })            
        }
    })  
}

var articleFindByPage = function(req,res){
    Article.findByPage(req.query.page,function (err,docs){
        if(err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: docs});
        }
    });
}

var getPageNum = function(req,res){
    Article.find(function(err,docs){
        var num = parseInt(docs.length/4);
        console.log(docs.length,num)        
        if (err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: num});
        }
    })  
}

var findAllTags = function(req,res){
    Article.findAllFileds('tags',function (err,docs){
        if(err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            var tags = new Array();
            docs.forEach(function(element) {
                tags = tags.concat(element.tags)  //数组拼接
            });
            tags = Array.from(new Set(tags)) //数组去重
            res.json({result: 'success', message: tags});
        }
    });
}

var findAllCategory = function(req,res){
    Article.findAllFileds('category',function (err,docs){
        if(err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            var category = new Array();
            docs.forEach(function(element) {
                category.push(element.category)  //数组拼接
            });
            category = Array.from(new Set(category)) //数组去重
            res.json({result: 'success', message: category});
        }
    });
}

var findByTag = function(req,res){
    Article.findByTag(req.query.tagName,function (err,docs){
        if(err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: docs});
        }
    });
}

var findByCate = function(req,res){
    Article.findByCate(req.query.cateName,function (err,docs){
        if(err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: docs});
        }
    });
}

var findByMonth = function(req,res){
    Article.findByMonth(req.query.year,req.query.month,function (err,docs){
        if(err) {
            res.json({result: 'fail', reason: err});
        }
        else {
            res.json({result: 'success', message: docs});
        }
    });
}

module.exports = {
    new : articleNew,
    findAll : articleFindAll,
    findById : articleFindById,
    getPageNum : getPageNum,
    findByPage : articleFindByPage,
    findByTag : findByTag,
    findByCate : findByCate,
    findByMonth : findByMonth,
    findAllTags : findAllTags,
    findAllCategory : findAllCategory
}
