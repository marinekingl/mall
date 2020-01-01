<template>
  <div>
    <nav-bar class="home-nav">
      <h4 slot="center">购物街</h4>
    </nav-bar>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"
import homeSwiper from './childComps/homeswiper'
import RecommendView from './childComps/RecommendView'


import { getHomeMultidata } from "network/home";
export default {
  name: "home",
  data() {
    return {
      banners: null,
     
    };
  },
  components: {
    NavBar,
    homeSwiper,
    RecommendView
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data[0];
    });
  }
};
</script>

<style>
.home-nav {
  background-color: skyblue;
  color: aliceblue;
}

</style>
