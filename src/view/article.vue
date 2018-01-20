<template>
    <div class="articlePage">
         <article-cont :article-id = "articleId" ></article-cont>
         <comments :config = "commentsConfig" :article-id = "articleId"></comments>
    </div>
</template>

<script>
import articleCont from './../components/articleCont.vue'
import comments from './../components/comments.vue'
export default {
    name: 'article',
    data () {
        return {
            commentsConfig : {
                title : "全部评论",
                btnCont : "发表评论",
            }
        }
    },
    components: {
        articleCont,
        comments
    },
    methods : {
        
    },
    created (){
        
    },
    computed : {
        articleId () {
            return this.$route.params.id
        }
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.articlePage {
    background-color: white;  
    padding: 55px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: $shadow;
}
</style>
