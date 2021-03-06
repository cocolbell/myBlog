var express = require('express')
var router = express.Router()
var authorize = require('./utils/auth').auth
var token = require('./utils/token')

//引入默认管理员
var admins = require('./admin').admins
var Article = require('./controller/article')
var Comment = require('./controller/comment')
var SubComment = require('./controller/subComment')



// 登录接口
router.post('/api/login', function(req, res){
	console.log(req.body)
    if (req.body.name == admins[0].name && req.body.password == admins[0].password) {
        res.fin(token.create());
    }
    else {
        res.err('用户名或密码错误');
    }
})



// 文章相关接口
router.post('/api/article/new', authorize, Article.new)

router.get('/api/article/getAllArticles', Article.findAll)

router.get('/api/article/getById', Article.findById)

router.get('/api/article/like', Article.likeAdd)

router.post('/api/article/edit', authorize, Article.edit)

router.post('/api/article/delete', authorize, Article.delete)

router.get('/api/article/getPageNum', Article.getPageNum)

router.get('/api/article/getByPage', Article.findByPage)

router.get('/api/article/getByMonth', Article.findByMonth)

router.get('/api/article/getByTag', Article.findByTag)

router.get('/api/article/getByCategory', Article.findByCate)

router.get('/api/tag/getAll', Article.findAllTags)

router.get('/api/category/getAll', Article.findAllCategory)


//评论相关接口
router.post('/api/comment/new', Comment.new)

router.post('/api/subComment/new', SubComment.new)

router.get('/api/comment/getByArtic', Comment.getByArtic)


module.exports = router;