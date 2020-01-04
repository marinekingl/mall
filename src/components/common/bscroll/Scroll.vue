<template>
    <!-- ref 一般绑定子组件 -->
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probetype: {
        type:Number,
        default:0
    }
  },
  data() {
    return {
      scroll: null,
    //   po: [0, 0]
    };
  },
  mounted() {
    // console.log(this.$refs.wrapper);
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probetype
    })
   this.scroll.on("scroll", position => {
            this.$emit('scroll',position)
    })
    this.scroll.scrollTo(0,0)
  },
  methods:{
      
  }
};
</script>

<style scoped>
</style>
