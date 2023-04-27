<template>
  <div class="menuItemContent" :class="isSeleted ? 'selected' : ''">
    <div class="logoContent">
      <img :src="logo" />
    </div>
    <div class="menuText">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    text: {
      type: String,
    },
    logo: {
      type: String,
    },
    isSeleted: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.menuItemContent {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 2px 0;
  background: #fff;
  cursor: pointer;
  .logoContent {
    width: 20px;
    height: 20px;
  }
  .menuText {
    line-height: 1.4;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }
}
.selected {
  background-color: greenyellow;
}
</style>
