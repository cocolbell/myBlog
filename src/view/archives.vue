<template>
    <div class="archive-page clearfix">     	
        <p><span class="title">文章归档</span></p>
		<div class="content">
			<div class="search-head">
				<p><span class="sign">#</span>所有标签</p>
				<span v-for="(item, index) in archiveItems" 
					:key='index'
					:class="{'tag-active': activeIndex == index}"
					@click="tagHandle(index, item)">
					{{item}}
				</span>
			</div>
			<searchRender :artic-list="searchRes"></searchRender>
		</div>
    </div>
</template>

<script>
import searchRender from './../components/searchRender.vue'
export default {
	name: 'archive',
	data () {
		return {
			searchRes : [],
			archiveItems : ['全部'],
			activeIndex : 0
		}
	},
	methods : {
		getArchi (tag) {
			var _this = this;
			this.$ajax({
				method: 'get',
				url: "/api/article/getByTag?tagName=" + tag,
			}).then(function(res){
				if(res.data.result == "success") {
					_this.searchRes = res.data.message;
				}
			})
			.catch(function(err){
				console.log(err);
			})
		},
		getAllArchi () {
			var _this = this;
			this.$ajax({
				method: 'get',
				url: "/api/article/getAllArticles" ,
			}).then(function(res){
				if(res.data.result == "success") {
					_this.searchRes = res.data.message;
				}
			})
			.catch(function(err){
				console.log(err);
			})
		},
		tagHandle (index, tag) {
			this.activeIndex = index;
			this.activeIndex != 0 && this.getArchi(tag);
			this.activeIndex == 0 && this.getAllArchi();
		}
	},
	components: {
		searchRender
	},
	mounted () {
		var _this = this;
		this.$ajax({
			method: 'get',
			url: "/api/tag/getAll",
		}).then(function(res){
			if(res.data.result == "success") {
				_this.archiveItems.splice(1, _this.archiveItems.length);
				var newArr = _this.archiveItems.concat(res.data.message);
				_this.archiveItems = newArr;
			}
		})
		.catch(function(err){
			console.log(err);
		});
		this.getAllArchi();
	}
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.archive-page {
    background-color: white;  
    padding: 35px;
    max-width: 1000px;
    margin: 0 auto;
    box-shadow: $shadow;
	>p {
		margin-bottom: 25px;
	}
	.title {
      font-size: 1.2rem;
	  color: $emfontColor;
      @include border(0,0,1,0);
	}
	.content {
		width: 77%;
		min-height: 210px;
		padding: 0 15px;
		@include border(0,0,0,1);
		.search-head {
			font-size: 1.0rem;	
			text-align: left;	
			padding-bottom: 20px;		
			>p {
				padding: 8px 20px;	
				@include border(0,0,1,0,dashed);	
			}
			>span {
				display: inline-block;
				cursor: pointer;
				margin-top: 8px;
				padding: 5px 10px 0 10px;
				&:hover {
					color : $decorateColor;
				}
			}
			.tag-active {
				color : $decorateColor;
			}
		}
	}
}


</style>
