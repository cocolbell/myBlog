<template>
    <div class="archive-page clearfix">     	
        <p><span class="title">文章归档</span></p>
		<div class="content">
			<div class="search-head">
				<p><span class="sign">#</span>所有标签</p>
				<span v-for="(item, index) in archiveItems" 
					:key='index'
					:class="{'tag-active': activeIndex == index}"
					@click = "activeIndex = index">
					{{item}}
				</span>
			</div>
			<div class="search-item">
				<p><span class="sign">#</span>2017年 04月（4篇文章）</p>
				<ul>
					<li>04日<span class="search-title">搭建一个简单的node服务器</span></li>
					<li>04日<span class="search-title">搭建一个简单的nodaasdassde服务器</span></li>
					<li>05日<span class="search-title">搭建一个简单的node服务器</span></li>
					<li>10日<span class="search-title">搭建一个简单的node服务器</span></li>
				</ul>
				<p><span class="sign">#</span>2017年 02月（4篇文章）</p>
				<ul>
					<li>04日<span class="search-title">搭建一个简单的node服务器</span></li>
					<li>04日<span class="search-title">搭建一个简单的noasdasde服务器</span></li>
					<li>05日<span class="search-title">搭建一个简单的node服务器</span></li>
					<li>10日<span class="search-title">搭建一个asdasddssd简单的node服务器</span></li>
				</ul>
			</div>
		</div>
    </div>
</template>

<script>
export default {
	name: 'archive',
	data () {
		return {
			searchRes : [
				{

				}
			],
			archiveItems : ['全部','Web缓存','ES6','Javascript','Web缓存','ES6','Javascript','Web缓存','ES6','Javascript','Web缓存','ES6','Javascript','Web缓存','ES6','Javascript'],
			activeIndex : 0
		}
	},
	components: {

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
		.search-item {
			text-align: left;
			font-size: 1.0rem;
			>p {
				@include border(0,0,1,0,dashed);
				margin-bottom: 8px;	
				padding: 8px 20px;		
			}
			li {
				margin-left: 50px;
				list-style: square;
				padding: 8px;
			}
		}
		.sign {
			color : $decorateColor;
			margin-right: 5px;
			font-size: 1.0rem;
		}
		.search-title {
			margin-left: 25px;
			cursor: pointer;
			&:hover {
				color : $decorateColor;
			}
		}	
	}
}


</style>
