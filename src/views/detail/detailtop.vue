<template>
  <div class="detailtop">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="price1">{{goods.price}}</span>
      <span class="discount">{{goods.discount}}</span>
      <span class="icon">优惠价</span>
    </div>
    <div class="line">
      <span class="Sales">销量{{goods.Sales}}</span>
      <span class="Sales">收藏{{goods.Favorite}}</span>
      <span class="Sales">退换货补运费</span>
    </div>
    <div></div>
  </div>
</template>

<script>
import goods from "./detail.js";
import db from "../../../db.js";

export default {
  name: "detailtop",
  data() {
    return {
      goods: null
    };
  },
  methods: {
    top() {
      console.log(db.detailitem.list[0].title);
    }
  },
  created() {
    let data = db.detailitem.list[0];
    this.goods = data;
  }
};
</script>

<style scoped>
.title {
  line-height: 20px;
  font-size: large;
}
.price1 {
  line-height: 50px;
  padding-right: 5px;
  color: red;
  font-weight: bolder;
  font-size: 20px;
}
.discount {
  text-decoration: line-through;
  font-size: 10px;
}
.icon {
  background-color: red;
  height: 20px;
  width: 20px;
  border-radius: 20%;
  margin-left: 5px;
  font-size: 15px;
  color: white;
}
.line {
  border-bottom: 1px solid rgba(215, 215, 215, 0.5);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
}
.Sales {
  color: rgb(151, 144, 144);
  font-size: 10px;
}
</style>
