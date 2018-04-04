<template>
    <div class="errPage">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paper-airplane"></use>
        </svg>
        <p class="err-title">页面可能逃走了</p> 
    </div>
</template>

<script>
export default {
    name: 'err',
    data () {
        return {
            
        }
    },
    components: {
        
    },
    methods : {
        
    }
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.errPage {
    margin-top : 150px;
    svg {
        font-size: 7.0rem;
        color: $decorateColor;
    }
}

.err-title {
    font-size: 1.0rem;
    margin: 60px 0;
}
</style>
