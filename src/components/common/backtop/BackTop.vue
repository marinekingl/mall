<template>
    <div class="backtop">
        <img src="~assets/imgs/up.svg" alt="" >
    </div>
</template>
<script>
export default {
    name:'backtop',
    methods:{
        
    },
}
</script>
<style scoped>
    .backtop{
        position: fixed;
        bottom: 60px;
        left: 300px;
        
        /* box-shadow: .2px .2px 2px #ebebeb; */
    }
    .backtop img{
        width: 50px;
        height: 50px;
        
    }

</style>
