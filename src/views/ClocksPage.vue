<template>
  <div class="clockContent">
    <cardTurnable />
    <!-- <turntable />
    <turntableCanvas /> -->
  </div>
</template>
<script>
import cardTurnable from "@/components/clocks/cardTurnable.vue";
// import turntableCanvas from "@/components/clocks/turntableCanvas.vue";
// import turntable from "@/components/clocks/turntable.vue";
export default {
  name: "ClocksPage",
  components: { cardTurnable },
  // components: { cardTurnable, turntable, turntableCanvas },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less"></style>
