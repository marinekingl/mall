<template>
    <div class="goods">
        <goodslistitem v-for="item in goods" :goodsitem="item" class="goodslistitem"/>
    </div>
</template>

<script>
import goodslistitem from "./goodslistitem";
export default {
  name: "goodslist",
  props: {
    goods: {
      type: Array,
      dafault() {
        return [];
      }
    }
  },
  components: {
    goodslistitem
  }
};
// console.log();
</script>
<style scoped>
.goods {
  display: flex;
  width: 375px;
  flex-wrap: wrap;
  justify-content: center;
}
.goodslistitem {
  /* text-align: center; */
  width: 49%;
  /* margin: 5px 5px; */
  padding: 5px;
}
</style>
