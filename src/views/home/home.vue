<template>
  <div id="home">
    <nav-bar class="home-nav">
      <h4 slot="center">购物街</h4>
    </nav-bar>
    <tab-control :name="['fashion','classic','music']" @tabClick="tabclick"
      ref="tabControl2" class="tab-control" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probetype="3" @scroll="newscroll">
      <home-swiper @swiperimgload="swiperimgload"></home-swiper>
      <recommend-view :banners=banners></recommend-view>
      <a href="">
        <img class="dimg" src="https://via.placeholder.com/600/a7c272" alt="">
      </a>
      <tab-control :name="['fashion','classic','music']" @tabClick="tabclick"
      ref="tabControl1" ></tab-control>
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
      isShow: false,
      tabOffsetTop:0,
      isTabFixed:false
    }
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
  mounted() {
    //请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res.data);
      // this.banners = res.data;
    })
    
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    topClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    newscroll(position) {
      // console.log(this.tabOffsetTop);
      //判断backtop 是否显示
      let y = position.y;
      this.isShow = (-position.y) > 400
      //决定tabcontrol是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
      
    },
    swiperimgload(){
      // console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabOffsetTop= this.$refs.tabControl1.$el.offsetTop
    }
  },
  computed: {
    changegoods() {
      return this.goods[this.change].list;
    }
  },
  
}
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
.content {
  height: 95%;
  overflow: hidden;
  /* margin-top: 44px; */
}

</style>
