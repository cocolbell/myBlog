<template>
    <div class="about-page clearfix">
        <selfIntro></selfIntro>     	
        <div class="right-cont">
		  	<p class="about-title">关于本站</p>
            <div class="about-cont">
                <p>这里是一个个人小站，不定期会分享一些前端相关的文章<em>（写了的话）</em></p>
                <p>由于种种因素，之前计划好的一些功能还未能上线，所以现在是只有<strong>文章板块</strong>是可以用的，其他板块例如评论留言会在测试之后上线</p>
                <br>
                <p>还有就是望大佬手下留情，网站并没有做什么网络安全措施，整个网站的所有代码也是完全开源的，可以在我的github里查看代码，所以设计方面的安全漏洞还请大佬们不要手痒去测试</p>
            </div> 

      	</div>
    </div>
</template>

<script>
import selfIntro from './../components/selfIntro.vue'
export default {
	name: 'about',
	data () {
		return {
			
		}
	},
	components: {
        selfIntro
	}
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.about-page {
       
    .right-cont {
        text-align: left; 
        float: right;
        background-color: white;  
        padding: 35px;
        max-width: 1000px;
        margin: 0 auto;
        box-shadow: $shadow;
        width: 770px;
    }
    .about-title {
        font-size: 1.2rem;
	    color: $emfontColor;
        @include border(0,0,1,0);
    }
    .about-cont {
        padding-top: 20px; 
        font-size: 1.0rem;
    }
}

</style>
