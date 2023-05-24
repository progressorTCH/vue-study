<template>
  <div class="content">
    <div class="headerContent">
      <HeaderContent />
    </div>
    <div class="body">
      <div class="menu">
        <MenuList />
      </div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
import MenuList from "./components/app/MenuList.vue";
import HeaderContent from "@/components/app/HeaderContent.vue";
export default {
  name: "HomePage",
  components: { HeaderContent, MenuList },
  data() {
    return {};
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: auto;
  width: 100%;
  overflow-x: hidden;
  .body {
    display: flex;
    flex-direction: row;
    .menu {
      width: 10vw;
      min-width: 300px;
    }
    .content {
      flex: 1;
    }
  }
}
</style>
