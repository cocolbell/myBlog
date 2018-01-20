<template>
    <div>
        <div class="subComments">
            <div class="subComment-body">
                <div class="subComment" 
                    @mouseenter="commentEnter"
                    @mouseleave="commentLeave"  
                    v-for="(comment , index) in subComments" 
                    :key='index'>
                    <p class="subCommentInfo">
                        <span class="subCommentInfo-name">{{comment.userName}}：@{{comment.replyTo}}</span>
                        <span class="subCommentInfo-time">{{comment.date | dateToCn}}</span>
                        <span class="subCommentInfo-reply right">回复</span>
                    </p>
                    <p class="subComment-cont">{{comment.content}}</p>
                </div>
            </div>
            <div class="subComments-foot">
                <p>
                    <span class="subComments-add">添加新评论</span> 
                    　|　
                    <span>还有14条评论，<span class="subComments-show">展开查看</span></span>                   
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'subComment',
    props: ['subComments'],
    data () {
        return {
        
        }
    },
    methods : {
        commentEnter () {

        },
        commentLeave () {

        }
    },
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.subComments {
    font-size: 0.9rem;
    margin-top: 20px;
    padding: 5px 0 5px 20px;
    @include border(0,0,0,3);
    .subCommentInfo {
        padding: 6px 0;
    }
    .subComment-cont {
        padding: 6px 0;
        @include border(0,0,1,0,dashed);
        color: $emfontColor;        
    }
    .subCommentInfo-name {
        color: $emfontColor;
    }
    .subCommentInfo-time {
        font-size: 0.7rem;
        margin-left: 15px;
    }
    .subCommentInfo-reply {
       margin-right: 15px;
       cursor: pointer;
       color: $emfontColor;
    }
    .subComments-foot {
        padding: 10px 0 4px 0;
        color: $emfontColor;
    }
    .subComments-add {
        cursor: pointer;
        &:hover {
            color: $decorateColor;
        }
    }
    .subComments-show {
        cursor: pointer;
        &:hover {
            color: $decorateColor;
        }
    }
}
</style>