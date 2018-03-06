<template>
    <div class="messagePage">
         <!-- <comments title='留言板' btnCont="发布留言" :config = "commentsConfig"></comments> -->
    </div>
</template>

<script>
import comments from './../components/comments.vue'
export default {
    name: 'message',
    data () {
        return {
            
        }
    },
    components: {
        comments
    },
    methods : {
        
    },
    created (){
        
    },
    computed :{

    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.messagePage {
    background-color: white;  
    padding: 55px;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: $shadow;
}
</style>
