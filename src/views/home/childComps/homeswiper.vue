<template>
    <div>
        <swiper>
            <swiper-item v-for="item in banner">
                <a href="">
                    <img :src="item.url" alt="" class="home-swip">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
    name:'homeSwiper',
    data(){
        return {
             banner:[
        {id:1,url:'https://via.placeholder.com/600/a7c272'},
        {id:1,url:'https://via.placeholder.com/600/a7c272'},
        {id:1,url:'https://via.placeholder.com/600/a7c272'},
        {id:1,url:'https://via.placeholder.com/600/a7c272'},
      ]
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>
<style scoped>
.home-swip{
    height: 150px;
}

</style>
