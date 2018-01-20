<template>
    <div class="searchBar">
        <input type="text"  placeholder="搜索" @focus="active = 1" @blur="active = 0" :class = "{ 'search-active' :active == 1 }">
    </div>
</template>

<script>
export default {
    name: 'searchBar',
    data () {
        return {
            active : 0,
        }
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
$inpulength:160px;
.searchBar{
    float: left;
    input {
        width: $inpulength;
        height: 35px;
        padding: 0 40px 0 20px;
        border: 1px solid #eee;
        border-radius: 40px;
        background: #eee;
        font-family: 'Monda','Source Sans Pro','微软雅黑', sans-serif;
        @include transition(0.3);
    }
    .search-active {
        width: $inpulength + 30;
    }
}

</style>
