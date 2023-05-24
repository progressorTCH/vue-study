<template>
  <div id="clockPlantContent">
    <canvas id="clockPlant"></canvas>
  </div>
</template>

<script>
export default {
  name: "ClassicalClocks",
  mounted() {
    
  },
  data() {
    return { }
  },
  methods: {
    initClocks() {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      const canvas = document.getElementById("clockPlant");
      const ctx = canvas.getContext("2d");
    },
  },
}
</script>

<style scoped lang="less">
@plantWidth: 800px;
@plantHeight: 800px;
#clockPlantContent {
  #clockPlant {
    width: @plantWidth;
    height: @plantHeight;
  }
}
</style>
