<template>
    <div class="recommend">
        <div v-for="item in img" class="recommend-item">
            <a href="">
                <img :src="item.url" alt="">
                <div>hello</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {
      img: [
        { url: "https://via.placeholder.com/600/a7c272", text: "hello world" },
        { url: "https://via.placeholder.com/600/a7c272", text: "hello world" },
        { url: "https://via.placeholder.com/600/a7c272", text: "hello world" },
        { url: "https://via.placeholder.com/600/a7c272", text: "hello world" }
      ]
    };
  },
  props: {}
};
</script>
<style scoped>
.recommend {
  display: flex;
}
.recommend-item {
  flex: 1;
  text-align: center;
  border-bottom: 8px solid #eeee;
  padding: 15px 0 30px;
  font-size: 14px;
}
img {
  border-radius: 50%;
  height: 70px;
}
</style>
