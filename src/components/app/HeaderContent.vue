<template>
  <div class="headerContent">
    <div class="logoContent">
      <img src="@/assets/logo.png" />
    </div>
    <div class="headerName">
      {{ siteName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContent",
  data() {
    return {
      siteName: "The site for study vue",
    };
  },
};
</script>

<style scoped lang="less">
.headerContent {
  width: 100vw;
  height: 60px;
  background-color: #eee;
  display: flex;
  align-items: center;
  .logoContent {
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
      align-self: center;
    }
  }
  .headerName {
    color: #665899;
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
