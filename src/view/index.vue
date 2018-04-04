<template>
    <div  class="indexPage clearfix">
      	<selfIntro></selfIntro>
      	<div class="right-cont">
		  	<articlePrev 
                v-for="(artic , index) in articDatas" 
                :key='index'
                :article='artic'>
            </articlePrev>
            <pagination
                :page-count="pageCount"
                :page-current="1">
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
            nowPage : 1,
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
            var vm = this;
            this.$ajax({
                method: 'get',
                url: '/api/article/getPageNum',
            }).then(function(res){
                if(res.data.result == "success") {
                    vm.pageCount = res.data.message;
                }
            })
            .catch(function(err){
                console.log(err);
            })
        },
        getArtic () {
            var vm = this;
            this.$ajax({
                method: 'get',
                url: '/api/article/getByPage?page=' + vm.nowPage,
            }).then(function(res){
                if(res.data.result == "success") {
                    vm.articDatas = res.data.message;
                }
            })
            .catch(function(err){
                console.log(err);
            })
        }
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'getArtic'
    },
    created (){
        this.getArtic();
  }
}
</script>

<style lang="scss">
.right-cont{
    float: right;
    
}


</style>
