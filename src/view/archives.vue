<template>
    <div class="archivePage clearfix">     	
        <p><span class="title">文章归档</span></p>
		<div class="leftCont left">
			<p>全部文章</p>
			<p>标签</p>
			<p>分类</p>
			<div class="archive-box">
				<div class="archive-item" v-for="(item , index) in archiveItems" :key="index">{{item}}</div>
			</div>
		</div>
		<div class="rightCont right">
			<div class="searchItem">
				<p><span class="sign">#</span>2017年 04月（4篇文章）</p>
				<ul>
					<li>04日<span class="searchTitle">搭建一个简单的node服务器</span></li>
					<li>04日<span class="searchTitle">搭建一个简单的node服务器</span></li>
					<li>05日<span class="searchTitle">搭建一个简单的node服务器</span></li>
					<li>10日<span class="searchTitle">搭建一个简单的node服务器</span></li>
				</ul>
				<p><span class="sign">#</span>2017年 02月（4篇文章）</p>
				<ul>
					<li>04日<span class="searchTitle">搭建一个简单的node服务器</span></li>
					<li>04日<span class="searchTitle">搭建一个简单的node服务器</span></li>
					<li>05日<span class="searchTitle">搭建一个简单的node服务器</span></li>
					<li>10日<span class="searchTitle">搭建一个简单的node服务器</span></li>
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
			archiveItems : ['Web缓存','ES6','Javascript']
		}
	},
	components: {

	}
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.archivePage {
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
	.leftCont {
		width: 18%;
		font-size: 1.0rem;
		>p {
			padding: 6px 0;
			cursor: pointer;
			@include transition();
			&:hover {
				color : $decorateColor;
			}
		}
	}
	.archive-box {
		margin-top: 25px;
		padding-top: 25px;
		
		@include border(1,0,0,0);
	}
	.archive-item {
		margin-left: 10px;
        color: rgba(0,0,0,.60);
		padding: 3px 5px;
		cursor: pointer;
		font-size: 0.8rem;
	}
	.rightCont {
		width: 77%;
		min-height: 210px;
		padding: 0 15px;
		@include border(0,0,0,1);	
		.searchItem {
			text-align: left;
			font-size: 1.0rem;
			>p {
				@include border(0,0,1,0,dashed);
				margin-bottom: 8px;	
				padding: 8px 0;		
			}
			li {
				// display: inline-block;
				margin-left: 35px;
				list-style: square;
				padding: 8px;
			}
		}
		.sign {
			color : $decorateColor;
			margin-right: 5px;
			font-size: 1.0rem;
		}
		.searchTitle {
			margin-left: 25px;
			cursor: pointer;
			&:hover {
				color : $decorateColor;
			}
		}	
	}
}


</style>
