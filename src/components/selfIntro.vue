<template>
    <div class="selfIntro">
        <img class="avatar" src="../assets/avatar.jpg" alt=""这就是头像>
        <p class="name">刘彪</p>
        <p class="bio">
            广东工业大学在校生，网络工程专业<br>
            现在正在前端的道路上摸爬滚打<br>
            是一个脱离了高级趣味的人
        </p>
        <a href="https://github.com/cocolbell" class="url">https://github.com/cocolbell</a>
        <div class="btn-group">
            <div class="btn">订阅</div>
        </div>
        <div class="websiteInfo">
            <ul class="clearfix">
                <li><p class="info-head">文章</p><p>66</p></li>
                <li><p class="info-head">分类</p><p>18</p></li>
                <li><p class="info-head">访客</p><p>1150</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selfIntro',
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.selfIntro{
    float: left;
    width:324px;
    height:600px;
    background-color:white ;
    box-shadow: $shadow;
    background-image: url(../assets/selfbg.png);
    background-repeat:no-repeat;
    background-size:auto 40%;
    color: $fontColor;
    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 4px solid white;
        margin-top: 180px;
    }

    .name {
        color:$emfontColor;
        padding: 5px 0;
        font-size: 1rem;
    }
    .bio {
        padding: 10px 0;
    }
    .url {
        padding: 5px 0;
    }
}
.btn-group {
    padding: 15px 0; 
}
.websiteInfo{
    padding: 0 15px 15px 15px;
    .clearfix{
        @include border(1,0,1,0);
    }
    li {
        float: left;
        width: 33.3%;
        line-height: 50px;
    }
    p {
        line-height: 35px;
    }
    .info-head{
        padding: 10px 0;
        font-size: 1.1rem;
    }
}

</style>
