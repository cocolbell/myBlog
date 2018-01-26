<template>
    <div class="comments text-left">
        <div class="comments-head">
            <span>{{title}}({{comments.length}})</span>
        </div>
        <div class="comments-body">
            <div class="comment" 
                @mouseenter="commentEnter"
                @mouseleave="commentLeave"  
                v-for="(comment , index) in comments" 
                :key='index'>
                <p class="commentInfo">
                    <span class="commentInfo-name">{{comment.userName}}</span>
                    <span class="commentInfo-time">{{comment.date | dateToCn}}</span>
                    <span class="commentInfo-floor right">#{{index + 1}}</span>
                    <span class="commentInfo-reply right">回复</span>
                </p>
                <p class="comment-cont">{{comment.content}}</p>
                <sub-comment :sub-comments = "comment.replyList" v-if = "comment.replyList && comment.replyList.length"></sub-comment>
            </div>
            <p v-if="comments.length == 0" class="none-tip">暂无评论</p>
        </div>
        <div class="comments-foot">
            <p class="commentE-head">{{btnCont}}</p>
            <p class="commentE-tip">电子邮件地址不会被公开。 必填项已用<span>*</span>标注</p>
            <div class="commentE-inputs clearfix">
                <div class="left">
                    <p>姓名：<span>*</span></p>
                    <input type="text" class="input-simple" placeholder="请输入姓名" v-model = 'newComment.userName'>
                </div>
                <div class="left margin-left">
                    <p>电子邮箱：<span>*</span></p>
                    <input type="text" class="input-simple" placeholder="请输入电子邮箱" v-model = 'newComment.email'>
                </div>
                <div class="left margin-left">
                    <p>个人网址：</p>
                    <input type="text" class="input-simple" placeholder="请输入个人网址" v-model = 'newComment.webSite'>
                </div>
                <div class="left commentE-cont">
                    <p>内容：<span>*</span></p>
                    <textarea class="input-simple" placeholder="请输入发送内容" v-model = 'newComment.content'></textarea>
                </div>
            </div>
            <div class="btn-group">
                <div class="btn" @click="submitComment">{{btnCont}}</div>
            </div>
            <div class="commentE-alert" v-show="tipFlag">
                <p>{{tip}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import subComment from './../components/subComment.vue'
export default {
    name: 'comments',
    props: ['config' , 'articleId'],
    props: {
        title : {
            default: '全部评论'
        },
        articleId : {
            required: true
        },
        btnCont : {
            default: '发表评论'
        }
    },
    data () {
        return {
            comments : [
                
            ],
            newComment : {
                articId :　this.articleId,
                content : '',
                userName : '',
                email : '',
                webSite : ''
            },
            tip : '不能为空',
            tipFlag : false
        }
    },
    components: {
        subComment
    },
    methods : {
        getComment () {
            var vm = this;
            this.$ajax({
                method: 'get',
                url: '/api/comment/getByArtic?articId=' + vm.articleId,
            }).then(function(res){
                if(res.data.result == "success") {
                    vm.comments = res.data.message;
                }
            })
            .catch(function(err){
                console.log(err);
            })
        },
        submitComment () {
            var vm = this;
            if (this.commentValidate()) {
                this.$ajax({
                    method: 'post',
                    url: '/api/comment/new',
                    data : vm.newComment
                }).then(function(res){
                    if(res.data.result == "success") {
                        vm.newComment.userName = '';
                        vm.newComment.content = '';
                        vm.newComment.email = '';
                        vm.getComment();
                    }
                })
                .catch(function(err){
                    console.log(err);
                })
            } 
        },
        showTip (text) {
            this.tip = text;
            this.tipFlag = true;
        },
        commentValidate () {
            for (var key in this.newComment) {
                if (!this.newComment[key] && key!='articId' && key!='webSite') {
                    var name = key == 'content' ? '内容' : key == 'userName' ? '姓名' : key == 'email' ? '邮箱' : '';
                    this.showTip(name + '不可以为空');
                    return false;
                }
            }
            this.tipFlag = false;
            return true;
        },
        commentEnter () {

        },
        commentLeave () {

        }
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'getComment'
    },
    created (){
        this.getComment();
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.comments {
    padding-top: 15px;
    .comments-head {
        color: $emfontColor;
        font-size: 1.1rem;
        padding-bottom: 15px;
    }
    .comment {
        padding-top:17px; 
    }
    .commentInfo-name {
        font-size: 1.0rem;
        margin-right: 5px;
        color: $emfontColor;
    }
    .commentInfo-time {
        font-size: 0.8rem;
    }
    .commentInfo-reply {
        margin-right: 15px;
        cursor: pointer;
        color: $emfontColor;       
    }
    .comment-cont {
        padding: 17px 0;
        font-size: 1.1rem;
        @include border(0,0,1,0);
        color: $emfontColor;
    }
    .commentE-head {
        color: $emfontColor;
        font-size: 1.1rem;
    }
    .comments-foot {
        padding-top: 30px;
    }
    .commentE-tip {
        padding-top: 15px;
        font-size: 1.0rem;
    }
    .commentE-inputs {
        padding: 15px 0;
        input {
            width: 200px;
            padding: 5px 10px;
        }
        .margin-left{
            margin-left:15px;
        } 
        p{
            padding-bottom: 10px;
            font-size: 1.0rem;
        }
        span {
            color:$decorateColor;
        }
    }
    .commentE-cont {
        padding-top: 15px;
        textarea{
            width: 675px;
            height: 100px;
            padding: 10px;
        }
    }
    .btn-group {
        text-align: center;
        width: 697px;
    }
    .commentE-alert {
        text-align: center;
        width: 697px;
        color:$decorateColor;
    }
}
.none-tip {
    font-size: 1.2rem;
    text-align: center;
}
</style>
