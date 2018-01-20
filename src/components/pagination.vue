<template>
    <div class="pagination">
        <ul class="clearfix">
            <li v-show='pageCur!=pageArr[0]'>上一页</li>
            <!-- <li class="page-item" v-show='numOverflow.prevMore'>1</li> -->
            <!-- <li class="page-item" v-show='numOverflow.prevMore'>...</li> -->
            <li 
                class="page-item" 
                v-for="(item , index) in pageArr" 
                :key='index'
                @click="jump(item)"
                :class="{'active': pageCur == item}">
                {{item}}
            </li>
            <!-- <li class="page-item" v-show='numOverflow.nextMore'>...</li> -->
            <!-- <li class="page-item" v-show='numOverflow.nextMore'>{{pageCount}}</li> -->
            <li v-show='pageCur!=pageArr[pageArr.length-1]'>下一页</li>    
        </ul>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props : ['pageCount','pageCurrent'],
    data () {
        return {
            pageArr: 1,
            numOverflow : {
                prevMore : false,
                nextMore : false
            },
            maxNum : 3,
            pageCur : 1
        }
    },
    methods : {
        jump (num) {
            if(parseInt(num)) {
                this.pageCur = num;
                this.init();
            }else return
        },
        init () {
            var offset2Fst = this.pageCur - 1;
            var offset2Lst = this.pageCount -this.pageCur;
        
            if(offset2Fst > this.maxNum && offset2Lst > this.maxNum) {
                this.pageArr = this.generateByCur(this.pageCur,1,1);
            }else if (offset2Fst <= this.maxNum && offset2Lst <= this.maxNum) {
                this.pageArr = this.generateByCur(this.pageCur,0,0);
            }else {
                if(offset2Fst > this.maxNum)   {
                    this.pageArr = this.generateByCur(this.pageCur,1,0);
                }
                if(offset2Lst > this.maxNum)  {
                    this.pageArr = this.generateByCur(this.pageCur,0,1);
                }
            }
        },
        generateByCur (cur,left,right) {
            var res = new Array();
            if(left && right) {
                for (let i=cur-left; i<=cur+right; i++) {
                    res.push(i)
                }
                res.unshift(1,'...')
                res.push('...',this.pageCount)
                return res
            }
            if(left) {
                for (let i=cur-left; i<=this.pageCount; i++) {
                    res.push(i)
                }
                res.unshift(1,'...')
            }
            if(right) {
                for (let i=1 ; i<=cur+right ; i++) {
                    res.push(i)
                }
                res.push('...',this.pageCount)
            }
            if(!left && !right) {
                for (let i=1; i<=this.pageCount ; i++) {
                    res.push(i)
                }
            }
            return res
        }
    },
    created () {
        this.pageCur = this.pageCurrent;        
        this.init();
    },
    computed : {
        
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.pagination {
    margin: 30px auto;
    color: #4f4f4f;
    ul {
        li {
            float: left;
            margin: 0 5px;
            height: 35px;            
            line-height: 35px;       
            text-align: center;
            cursor: pointer;
        }
        .page-item {
            width: 35px;
        }
        .active {
            @include border(0,0,1,0,solid,$decorateColor);
            color: $decorateColor;                

        }
    }
}
</style>
