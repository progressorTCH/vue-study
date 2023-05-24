<template>
  <div class="clockContent">
    <div class="leftContent">
      <MenuList />
    </div>
    <div class="content">
      <div class="topMenu">
        <div
          class="topMenuItem"
          @click="
            () => {
              menuClick('cardTurnable');
            }
          "
        >
          CardTurnable
        </div>
        <div
          class="topMenuItem"
          @click="
            () => {
              menuClick('turntableCanvas');
            }
          "
        >
          TurntableCanvas
        </div>
        <div
          class="topMenuItem"
          @click="
            () => {
              menuClick('turntable');
            }
          "
        >
          Turntable
        </div>
      </div>
      <div v-if="viewContent == 'cardTurnable'">
        <cardTurnable />
      </div>
      <div v-if="viewContent == 'turntableCanvas'">
        <turntableCanvas />
      </div>
      <div v-if="viewContent == 'turntable'">
        <turntable />
      </div>
    </div>
  </div>
</template>
<script>
// import MenuList from "@/components/app/MenuList.vue";
import cardTurnable from "@/components/clocks/cardTurnable.vue";
import turntableCanvas from "@/components/clocks/turntableCanvas.vue";
import turntable from "@/components/clocks/turntable.vue";
export default {
  name: "ClocksPage",
  // components: { cardTurnable },
  components: { cardTurnable, turntable, turntableCanvas },
  data() {
    return {
      viewContent: "cardTurnable",
    };
  },
  methods: {
    menuClick(viewType) {
      this.viewContent = viewType;
    },
  },
};
</script>

<style scoped lang="less">
.content {
  display: flex;
  flex-direction: column;
  .topMenu {
    display: flex;
    flex-direction: row;
    .topMenuItem {
      margin: 5px;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
}
</style>
