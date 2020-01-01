<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="skyblue">
        <img slot="item-icon" src="~assets/imgs/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/imgs/tabbar/home1.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="skyblue">
        <img slot="item-icon" src="~assets/imgs/tabbar/all.svg" alt="">
        <img slot="item-icon-active" src="~assets/imgs/tabbar/all1.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="skyblue">
        <img slot="item-icon" src="~assets/imgs/tabbar/cart-Empty.svg" alt="">
        <img slot="item-icon-active" src="~assets/imgs/tabbar/cart-Empty1.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="skyblue">
        <img slot="item-icon" src="~assets/imgs/tabbar/bussiness-man.svg" alt="">
        <img slot="item-icon-active" src="~assets/imgs/tabbar/bussiness-man1.svg" alt="">
        <div slot="item-text">个人</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>
