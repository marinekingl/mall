<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      //   isActive: true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path);
      }
    }
  }
};
</script>

<style scope>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 45px;
  cursor: pointer;
  color: rgb(18, 150, 219);
  font-size: 8px;
}
.tab-bar-item img {
  height: 20px;
  width: 20px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
