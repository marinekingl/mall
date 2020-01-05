<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h4 slot="center">购物街</h4>
    </nav-bar>
    <scroll class="content" ref="scroll" :probetype="3" @scroll="newscroll">
      <home-swiper></home-swiper>
      <recommend-view></recommend-view>
      <a href="">
        <img class="dimg" src="https://via.placeholder.com/600/a7c272" alt="">
      </a>
      <tab-control class="tab-control" :name="['fashion','classic','music']" @tabClick="tabclick"></tab-control>
      <goodslist :goods="changegoods"></goodslist>
    </scroll>
    <backtop @click.native="topClick" v-show="isShow"></backtop>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import goodslist from "components/content/goods/goodslist";

import homeSwiper from "./childComps/homeswiper";
import RecommendView from "./childComps/RecommendView";
import Scroll from "components/common/bscroll/Scroll";
import backtop from "components/common/backtop/BackTop";

import { getHomeMultidata } from "network/home";
import db from "../../../db.js";
import { log } from "util";

export default {
  name: "home",
  data() {
    return {
      banners: null,
      goods: db,
      change: "fashion",
      scroll: null,
      isShow: true
    };
  },
  components: {
    NavBar,
    homeSwiper,
    RecommendView,
    TabControl,
    goodslist,
    Scroll,
    backtop
  },
  created() {
    //请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data[0];
    });
  },
  methods: {
    tabclick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.change = "fashion";
          break;
        case 1:
          this.change = "classic";
          break;
        case 2:
          this.change = "music";
          break;
      }
    },
    topClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    newscroll(position) {
      // console.log(position.y);
      let y = position.y;
      this.isShow = (-position.y) > 400
    }
  },
  computed: {
    changegoods() {
      return this.goods[this.change].list;
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background-color: skyblue;
  color: aliceblue;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.dimg {
  margin-top: 40px;
  height: 200px;
  width: 100%;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  height: 95%;
  overflow: hidden;
  /* margin-top: 44px; */
}
</style>
