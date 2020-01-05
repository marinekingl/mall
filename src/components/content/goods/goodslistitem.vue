<template>
    <div class="goodslitsitem" @click="detailClick" >
        <div>
        <img :src="goodsitem.img" alt="" class="img" >
            <p>{{goodsitem.title}}</p>
            <span class="price">{{goodsitem.price}} rmb</span>
            <span class="collocet">  收藏：{{goodsitem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "goodslistitem",
  props: {
    goodsitem: {
      type: Object,
      dafault() {
        return {};
      }
    }
  },
  methods:{
    detailClick(){
      this.$router.push('/detail')
    }
  }
};
// console.log(goositem);
</script>
<style scoped>
img {
  height: 260px;
  width: 100%;
  border-radius: 2%;
}
.price{
  color: red;
}
</style>
