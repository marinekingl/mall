<template>
    <div class="detail">
        <nav-bar class="navbar">
            <img src="~assets/imgs/back1.svg" alt="" slot="left"
             class="back" @click="backhome" >
            <div slot="center"  class="title">
                <div v-for="(item,index) in detail"
            class="titleitem":class='{active: index === currentIndex}' 
            @click="titleClick(index)">{{item}}</div>
            </div>
        </nav-bar>
        <detailitem></detailitem>
    </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";


import detailitem from "./detailitem";


export default {
  name: "detail",
  data() {
    return {
      detail: ["商品", "详情", "评论", "推荐"],
      currentIndex:0
    }
  },
  components: {
    NavBar,
    detailitem
  },
  methods:{
      backhome(){
          this.$router.back()
      },
      titleClick(index){
          this.currentIndex = index
      }
  }
};
</script>

<style scoped>
    .title{
        display: flex;
    }
    .titleitem{
        flex: 1;
        font-size: 11px;
    }
    .back{
        height: 20px;
        margin-top: 12px;
    }
    .active{
        color: red;
    }
</style>
