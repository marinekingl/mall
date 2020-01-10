<template>
  <swiper>
    <swiper-item v-for="item in banner">
      <img :src="item.url" alt="" class="detail-swiper">
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "detailitem",
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      banner: [
        { id: 1, url: "https://via.placeholder.com/600/a7c272" },
        { id: 1, url: "https://via.placeholder.com/600/a7c272" },
        { id: 1, url: "https://via.placeholder.com/600/a7c272" },
        { id: 1, url: "https://via.placeholder.com/600/a7c272" }
      ]
    };
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
</style>
