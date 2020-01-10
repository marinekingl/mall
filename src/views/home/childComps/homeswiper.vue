<template>
    <div>
        <swiper>
            <swiper-item v-for="item in banner">
                <a href="">
                    <img :src="item.url" alt="" class="home-swip" @load="imgload">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "homeSwiper",
  data() {
    return {
      banner: [
        { id: 1, url: "https://via.placeholder.com/600/a7c272" },
        { id: 1, url: "https://via.placeholder.com/600/a7c272" },
        { id: 1, url: "https://via.placeholder.com/600/a7c272" },
        { id: 1, url: "https://via.placeholder.com/600/a7c272" }
      ],
      isload:false,
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgload() {
      
      if(!this.isload){
        //   console.log('11111');
          this.$emit("swiperimgload");
          this.isload = true;
      }
    }
  },
  updated() {}
};
</script>
<style scoped>
.home-swip {
  height: 150px;
}
</style>
