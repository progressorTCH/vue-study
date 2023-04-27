<template>
  <div class="menuContent">
    <MenuItem
      v-for="(item, index) in menuList"
      :key="index"
      :logo="item.logo"
      :text="item.text"
      :isSeleted="item.isSelected"
      @click="menuClick(index)"
    />
  </div>
</template>
<script>
import router from "@/router";
import MenuItem from "./MenuItem.vue";
export default {
  name: "MenuList",
  components: { MenuItem },
  data() {
    return {
      menuList: [
        {
          text: "Clocks",
          logo: "",
          path: "/clocks",
          isSelected: true,
        },
      ],
    };
  },
  methods: {
    menuClick(index) {
      console.log(this);
      let path = this.menuList[index].path;
      router.push(path);
      for (const key in this.menuList) {
        if (key == index) {
          this.menuList[key].isSelected = true;
        } else {
          this.menuList[key].isSelected = false;
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.menuContent {
  height: 100vh;
  width: 10vw;
  min-width: 300px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
