<template>
    <div class="articleCont">
        <p class="article-title">{{articleData.title}}</p>
        <p class="article-head"><span class="article-cate">{{articleData.category}}</span><span class="article-time">发布于2017年7月3日</span></p>
        <div class="article-body markdown-body" v-html="articleData.content">

        </div>
        <div class="article-foot">
            <div class="article-tags">
                <span class="article-tag" v-for = "(tag , index) in articleData.tags">#{{tag}}<i>[3]</i></span>
            </div>
            <div class="article-func">

            </div>
            <div class="article-nav clearfix">
                <div class="article-navL left text-left">
                    <p>上一篇</p>
                    <p @click="routerGo(prevId)" class="prevTitle">
                        {{articContext.prev?articContext.prev.title : '无'}}
                    </p>
                </div>
                <div class="article-navR right text-right">
                    <p>下一篇</p>
                    <p @click="routerGo(nextId)" class="prevTitle">
                        {{articContext.next?articContext.next.title : '无'}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'articleCont',
    props: ['articleId'],
    data () {
        return {
            articleData : {},
            articContext : {
                prev : {articId:0},
                next : {articId:0}
            },
            prevId : 0,
            nextId : 0
        }
    },
    methods : {
        getCont () {
            var self = this;
            this.$ajax({
                method: 'get',
                url: '/api/article/getById?id=' + self.articleId,
            }).then(function(res){
                if(res.data.result == "success") {
                    self.articleData = res.data.message.content[0];
                    self.articContext.prev= res.data.message.context[1];
                    self.articContext.next = res.data.message.context[0];
                    self.prevId = self.articContext.prev?self.articContext.prev.articId : 0;
                    self.nextId = self.articContext.next?self.articContext.next.articId : 0
                }
            })
            .catch(function(err){
                console.log(err);
            })
        },
        routerGo (id) {
            if(id) {
                this.$router.push(id.toString())
            }   
            else return false
        }
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'getCont'
    },
    created (){
        this.getCont();
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.articleCont {
    color: $fontColor;
    .article-head{
        margin: 10px 0;
    }
    .article-title{
        font-size: 1.4rem;
        color: $emfontColor;
        font-weight: 400;
        display: inline-block;
        margin: 0 auto;
        padding-top: 20px;
        @include border(0,0,1,0);
    }
    .article-cate{
        font-size: 0.8rem;
        margin-right: 15px; 
        cursor: pointer;
    }
    .article-time{
        font-size: 0.8rem;
        font-style: italic;
    }
    .article-body{
        text-align: left;
        padding: 60px 0;
    }
    .article-tags {
        text-align: left;
    }
    .article-tag {
        font-size: 0.8rem;
        background-color: #fafafa;
        border: 1px solid #f0f0f0;
        border-radius: 2px;
        color: rgba(0,0,0,.60);
        padding: 3px 5px;
        cursor: pointer;
        margin-right: 5px;
        i {
            font-style:normal;
            display: inline-block;
            transform: translate3d(0,-3px,0)
        }
    }
    .article-nav {
        margin: 30px 0;
        @include border(1,0,1,0);      
    }
    .article-navL,.article-navR {
        padding: 20px;
        a {
            font-size: 1.0rem;
            &:hover {
                color: $decorateColor;
                @include transition (0.3);
            }
        }
    }
    .prevTitle {
        font-size: 1.0rem;
        color: $emfontColor;
        cursor: pointer;
        &:hover {
            color: $decorateColor
        } 
    }
}
</style>
