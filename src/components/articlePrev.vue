<template>
    <div class="articlePrev">
        <p class="articP-title"><router-link :to = "'articles/' + article.articId ">{{article.title}}</router-link></p>
        <p class="articP-head"><span class="articP-cate">{{article.category}}</span><span class="articP-time">发布于2017年7月3日</span></p>
        <p class="articP-cont">
            {{article.contentPrev}}
            <span class="articP-href"><router-link :to = "'articles/' + article.articId ">阅读全文 »</router-link></span>
        </p>
        <div class="articP-foot clearfix">
            <div class="articP-footL">
                <span class="articP-tagI">标签：</span>
                <span class="articP-tags" v-for="(tag , index) in article.tags" :key="index">#{{tag}}</span>
            </div>
            <div class="articP-footR">
                <span>17 喜欢</span>
                <span>/</span>
                <span>18 回复</span>
                <span>/</span>
                <span>150 浏览</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'articlePrev',
    props: ['article'],
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.articlePrev {
    width: 770px;
    padding: 30px 40px;
    margin-bottom: 15px;
    background-color: white;
    box-shadow: $shadow;
    color: $fontColor;
    .articP-head{
        margin: 10px 0;
    }
    .articP-title a{
        font-size: 1.2rem;
        color: $emfontColor;
        font-weight: 400;
        display: inline-block;
        margin: 0 auto;
        cursor: pointer;
        @include transition (0.3);
        &:hover {
            color : $decorateColor;
        }
    }
    .articP-cate{
        font-size: 0.8rem;
        margin-right: 15px; 
        cursor: pointer;
    }
    .articP-time{
        font-size: 0.8rem;
        font-style: italic;
    }
    .articP-cont{
        text-align: left;
        font-size: 1rem;
        margin: 30px 0;
    }
    .articP-href a{
        color: $decorateColor;
        cursor: pointer;
    }
    .articP-href:hover {
        text-decoration: underline;
    }
}
.articP-foot {
    .articP-tagI {
        margin-right: 10px; 
    }
    .articP-tags {
        margin-right: 10px;
        cursor: pointer;
    }
    .articP-footL {
        float: left;
    }
    .articP-footR {
        float: right;
        span {
            padding: 0 4px;
        }
    }
}
</style>
