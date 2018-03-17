// 引入Express
var express = require('express')

//引入文件读取模块
var fs = require('fs');

var path = require('path'); 

// 引入处理post数据的模块
var bodyParser = require('body-parser')

// 引入整个系统的API
var api = require('./server/api')

var mongoose = require('mongoose')
var option = {
    useMongoClient:true,
    server: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000
        }
    }
};

//引入promise模块
mongoose.Promise = require('bluebird');

var app = express();

app.use(bodyParser.json());
app.use(api);
app.use('/dist', express.static(path.resolve('./dist'),{ maxAge: 60*60*24}));



// 博客首页
app.get('*', function(req, res) {
    var index = fs.readFileSync('./index.html', 'utf-8');
    res.send(index)
});

mongoose.connect('mongodb://localhost:27108/test' ,option, function(err){
    if (err) {
        console.log("服务器连接失败，原因" + err)
    }
    else {
        app.listen(process.env.PORT || 7000, function() {
            console.log("应用启动成功，访问地址为 localhost:7000")
        });
    }
})
