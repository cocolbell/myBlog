<template>
 	<div id="app">
    	<MyHeader></MyHeader>
      	<div class="content clearfix">
            <router-view></router-view>
      	</div>
		<div class="footer">
			<div class="txt">© 2018 COCOLBELL. All Rights Reserved.</div>
		</div>  
  	</div>
</template>

<script>
import MyHeader from './components/header.vue'
import selfIntro from './components/selfIntro.vue'
export default {
name: 'app',
	data () {
		return {
			
		}
	},
	components: {
		MyHeader
	}
}
</script>

<style lang="scss">
@import "./global/normalize.scss";
@import "./global/vars.scss";
@import "./global/global.scss";
@import "./global/markdown.scss";
@font-face {
    font-family: 'Monda';
    src: url('./assets/TK3tWkYFABsmjsphPho.woff2') format('woff2'),
}
#app {
	font-family: 'Monda','Source Sans Pro','微软雅黑', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: $fontColor ;
	background-color: $bgColor;
	// font-weight: 300 ;
	font-size:14px;
	margin-top: 66px;
	::selection { 
		color:white;
		background:$decorateColor; 
	}
	::-moz-selection { 
		color:white;
		background:$decorateColor; 
	}
	::-webkit-selection { 
		color:white;
		background:$decorateColor; 
	}
}

.content {
	max-width:1200px;
	margin:0 auto; 
	padding: 40px 0;
	min-height: 730px;
	
}

.footer {
	padding: 32px 0;
	background-color:#353535;
	width: 100%;
}

</style>
