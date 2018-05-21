<template>
    <div class="search-item">
        <transition-group name="fadeY">
            <div v-for="(articList , index) in artics" :key="index">
                <p><span class="sign">#</span>{{index}}（{{articList.length}}篇文章）</p>
                <ul>
                    <li v-for="(artic , i) in articList" :key="i">{{artic.day}}日<span class="search-title">{{artic.title}}</span></li>
                </ul>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'searchRender',
    props: ['articList'],
    data () {
        return {
            
        }
    },
    methods : {
        handleArtic (list) {
            var _this = this;
            var newList = {};
            this.articList.forEach(function(ele, i) {
                var date = _this._Global.format(new Date(ele.date),'yyyy-M-d');
                var dateArr = date.split('-');
                var month = dateArr[0] + '年 ' + dateArr[1] + '月';
                newList[month] == undefined && (newList[month] = new Array());
                ele.day = dateArr[2];
                newList[month].push(ele);
            });
            return newList;
        }
    },
    computed : {
        artics: function() {
            return this.handleArtic(this.articList);
        }
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.search-item {
    text-align: left;
    font-size: 1.0rem;
    p {
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
.fadeY-enter-active {
    transition: all .7s;
}
.fadeY-enter, .fadeY-leave-to /* .fade-leave-active below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
}
</style>
