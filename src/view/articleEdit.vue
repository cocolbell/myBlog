<template>
    <div class="articleEditPage">
         <div class="articleEdit clearfix">
                <div class="articleEdit-contL">
                    <p>文章编辑</p>
                    <div class="articleEdit-Edit">
                        <span>文章标题：</span>
                        <input type="text" class="input-simple title" v-model="article.title" placeholder="请输入文章标题">
                        <span>文章标签：</span>
                        <input type="text" class="input-simple tags" v-model="article.tags" placeholder="请输入文章标签">
                        <span>文章分类：</span>
                        <select class="input-simple category" v-model="article.category">
                            <option>前端</option>
                            <option>NodeJs</option>
                        </select>
                        <span>文章预览内容：</span>
                        <textarea class="input-simple prevCont" v-model="article.contentPrev" placeholder="请输入文章预览内容">
                        </textarea>
                        <span>文章内容：</span>
                        <textarea class="input-simple cont" v-model="articCont" placeholder="请输入文章内容">
                        </textarea>
                        <div class="btn-group">
                            <div class="btn" @click="submitArticle">发布文章</div>
                        </div>
                    </div>
                </div>
                <div class="articleEdit-contR">
                    <p>文章预览</p>
                    <div class="articleEdit-prev markdown-body" v-html="articPrev">
                    </div>
                </div>
         </div>
    </div>
</template>

<script>
var marked = require("marked");
export default {
    name: 'articleEdit',
    data () {
        return {
            articCont : "",
            article : {
                title : "",
                tags : "",
                contentPrev : "",
                category : "",
            }
        }
    },
    components: {
        
    },
    methods : {
        submitArticle () {
            var that = this;
            if (this.article.title && this.article.contentPrev && this.article.category && this.articPrev && this.article.tags) {
            var dataTags = this.article.tags.split("/");
            this.$ajax({
                method: 'post',
                url: '/api/article/new',
                data: {
                    title: that.article.title,
                    date: new Date(),
                    content : that.articPrev,
                    contentPrev : that.article.contentPrev,
                    tags : dataTags,
                    category : that.article.category
                }
            }).then(function(res){
                console.log(res)
            })
            .catch(function(err){
                console.log(err)
            })
            }
            else console.log("请填写完整文章信息！");
        }
    },
    created (){
        
    },
    computed :{
        articPrev: function(){
            return marked(this.articCont);
        }
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.articleEdit {
    width: 100%;
    min-width: 1200px;
    padding: 20px;
    background-color: white;
    text-align: left;
    font-size: 1.1rem;
    color: $emfontColor;
    box-shadow: $shadow;
    >div{
        
        >p{
            padding:0 0 0 10px; 
            border-left: 2px solid  $decorateColor;
        }
    }
    .articleEdit-contL {
        float: left;
        width: 49%;
    }
    .articleEdit-contR {
        float: right;
        width: 50%;
        >p{
            margin-left: 5px;
        }
    }
}
.articleEdit-Edit,.articleEdit-prev {
    border-top: 1px solid #eee;
    margin-top: 20px;
    text-align: left;
    font-size: 1.0rem;
    padding: 20px 0 0 0;
    color: $emfontColor;
}
.articleEdit-Edit {
    .title {
        width: 80%;
        height: 28px;
        margin-bottom: 20px;
    }
    .tags {
        width: 40%;
        height: 28px;
        margin-right: 53px;
    }
    .category {
        margin-bottom: 20px;
    }
    .cont {
        margin-top: 15px;
        height: 500px;
        width: 555px;
        color: $emfontColor;
        font-size: 1.0rem;
        resize: none;
    }
    .prevCont{
        margin-top: 15px;
        height: 60px;
        width: 555px;
        color: $emfontColor;
        font-size: 1.0rem;
        resize: none;
    }
    .btn-group{
        text-align: center;
    }
}
.articleEdit-prev{
    padding-left:15px; 
    height: 700px;
    overflow-y:auto;
    overflow-x:hidden;
    max-width: 570px;
}   
</style>
