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
        {id:1,url:'https://via.placeholder.com/150/92c952'},
        {id:1,url:'https://via.placeholder.com/150/92c952'},
        {id:1,url:'https://via.placeholder.com/150/92c952'},
        {id:1,url:'https://via.placeholder.com/150/92c952'},
      ]
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>
<style scope>
.home-swip{
    height: 100px;
}

</style>
