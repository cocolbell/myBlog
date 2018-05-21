<template>
    <div class="nav">
        <div class="nav-wrapper clearfix">
            <p class="nav-logo">没有LOGO</p>
            <searchBar></searchBar>
            <div class="nav-list" @mouseleave = "switchTab(curIndex)">
                <div class = "nav-tab" 
                    :class = "{'nav-active' : activeIndex==index}" 
                    v-for = "(item,index) in navList" 
                    :key = "index" 
                    @click = "switchTab(index);curIndex = index;"
                    @mouseenter = "switchTab(index)"
                >
                    <router-link :to="item.routerTo">{{item.text}}</router-link>
                </div>
                <div class="active-elm" :style = " 'left :' + XLeft"></div>
            </div>
        </div>
    </div>
</template>

<script>
import searchBar from './searchBar.vue'
export default {
    name: 'Myheader',
    data () {
        return {
            activeIndex:0,
            curIndex:0,
            navList : [
                {
                    routerTo:"/",
                    text:"首页",
                },
                {
                    routerTo:"/interests",
                    text:"杂物",
                },
                {
                    routerTo:"/archives",
                    text:"归档",
                },
                {
                    routerTo:"/about",
                    text:"关于",
                }
            ]
        }
    },
    components : {
        searchBar
    },
    methods : {
        switchTab (index) {
            this.activeIndex = index;
        }
    },
    mounted () {
        var route = this.$route;
    },
    computed : {
        XLeft : function() {
            return this.activeIndex * 25 + "%";
        }
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.nav{
  position:fixed;
  top:0;
  left:0;
  height:66px;
  line-height:66px;
  width:100%;
  background-color:$mainColor;
  text-align:center;
  z-index:10;
  .nav-wrapper {
    max-width:1200px;
    margin:0 auto;      
  }
  
}
.nav-logo{
    float: left;
    color: $decorateColor;
    font-size: 1.5rem;
    padding: 0 80px;
}
.nav-list{
    float: right;
    font-size:1rem;
    position: relative;
    margin-right:20px;
    .nav-tab{
        float:left;
        cursor:pointer;
        a {
            height: 100%;
            display: block;
            padding: 0 24px;
            color: $emfontColor;
            @include transition(0.3);
            &:hover {
                color:$decorateColor;
            }
        }
    }
    .nav-active a{
        color:$decorateColor;
    }
    .active-elm{
            content:"";
            display:block;
            position:absolute;
            bottom:0px;
            background-color:$decorateColor;
            height:2px;
            width: 50px;
            margin: 0 15px;
            @include transition(0.3);
    }
}
</style>
