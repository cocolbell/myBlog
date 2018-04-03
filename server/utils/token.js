var crypto = require("crypto");

/**
 * @description 只做了签名认证和过期检测
 */
var token = (function () {
    var secret = "cocolbell.justmango.com";
    return {
        /**
         * @param {object} payload
         * @param {date} 过期时间，以s为单位
         */
        createToken: function (payload, expires) {

            var tokenData = {
                data: payload,  //payload
                created: parseInt(Date.now()/1000),  //token生成的时间的，单位秒
                exp: parseInt(expires) || 60 * 10  //token有效期
            };
    
            //payload信息
            var base64Str = Buffer.from(JSON.stringify(tokenData),"utf8").toString("base64");
    
            //添加签名
            var hash = crypto.createHmac('sha256', secret);
            hash.update(base64Str);
            var signature = hash.digest('base64');
    
    
            return  base64Str + "." + signature;
        },
        create: function () {
            return this.createToken({
                iss: 'justmango.cn'
            },30 * 60)
        },
        decodeToken: function (token) {
    
            var decArr = token.split(".");
            if(decArr.length < 2){
                //token不合法
                return false;
            }
    
            var payload = {};
    
            try {
                payload = JSON.parse(Buffer.from(decArr[0],"base64").toString("utf8"));
            } catch(e) {
                return false;
            }
    
            //检验签名
            var hash = crypto.createHmac('sha256', secret);
            hash.update(decArr[0]);
            var checkSignature = hash.digest('base64');
    
            return {
                payload: payload,
                signature: decArr[1],
                checkSignature: checkSignature
            }
        },
        checkToken: function (token) {
            var resDecode = this.decodeToken(token);
            if(!resDecode){
    
                return false;
            }
    
            //是否过期
            var expState = (parseInt(Date.now()/1000)-parseInt(resDecode.payload.created)) > parseInt(resDecode.payload.exp)?false:true;
            
            if(resDecode.signature === resDecode.checkSignature && expState){
    
                return true;
            }
    
            return false;
        }
    }
})()
    
    
module.exports = token;