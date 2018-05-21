<template>
    <div  class="indexPage clearfix">
      	<selfIntro></selfIntro>
      	<div class="right-cont">
            <transition-group name="fade">
		  	    <articlePrev 
                    v-for="(artic , index) in articDatas" 
                    :key='index'
                    :article='artic'>
                </articlePrev>
            </transition-group>
            <pagination
                :page-count="pageCount"
                :page-current="1"
                @jumpPage="routeGo">
            </pagination>
      	</div>
    </div>
</template>

<script>
import selfIntro from './../components/selfIntro.vue'
import articlePrev from './../components/articlePrev.vue'
import pagination from './../components/pagination.vue'
export default {
    name: 'index',
    data () {
        return {
            articDatas : [],
            pageCount : 1
        }
    },
    components: {
        selfIntro,
        articlePrev,
        pagination
    },
    methods : {
        getPageNum () {
            var _this = this;
            this.$ajax({
                method: 'get',
                url: '/api/article/getPageNum',
            }).then(function(res){
                if(res.data.result == "success") {
                    console.log('更新')
                    _this.pageCount = res.data.message;
                }
            })
            .catch(function(err){
                console.log(err);
            })
        },
        getArtic (num) {
            var _this = this;
            this.$ajax({
                method: 'get',
                url: '/api/article/getByPage?page=' + _this.$route.params.pageNum,
            }).then(function(res){
                if(res.data.result == "success") {
                    _this.articDatas = res.data.message;
                }
            })
            .catch(function(err){
                console.log(err);
            })
        },
        routeGo (num) {
            this.$router.push(num.toString());
        }
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'getArtic'
    },
    created (){
        this.getArtic();
        this.getPageNum();
  }
}
</script>

<style lang="scss">
.right-cont{
    float: right;
    
}


</style>
