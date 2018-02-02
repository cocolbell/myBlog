<template>
    <div class="articlePage">
         <article-cont :article-id = "articleId" ></article-cont>
         <comments :article-id = "articleId" :url = "commentUrl"></comments>
    </div>
</template>

<script>
import articleCont from './../components/articleCont.vue'
import comments from './../components/comments.vue'
export default {
    name: 'article',
    data () {
        return {
            commentUrl : {
                getUrl : '/api/comment/getByArtic?articId=',
                newUrl : '/api/comment/new',
                newReplyUrl : '/api/subComment/new'
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
