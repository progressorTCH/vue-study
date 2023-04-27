<template>
  <div id="clockCanvas">
    <canvas id="clockContain" width="500" height="500">
      你的浏览器不支持 canvas，请升级你的浏览器。
    </canvas>
  </div>
</template>

<script>
export default {
  name: "turntableCanvas",
  data() {
    return {};
  },
  methods: {
    initClock() {
      let time = new Date();
      const hour = time.getHours();
      const minute = time.getMinutes();
      const second = time.getSeconds();
      const canvas = document.getElementById("clockContain");
      const ctx = canvas.getContext("2d");
      if (ctx != null) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "10px sans-serif blod";
        const hourDeg = 360 / 24;
        const minuteDeg = 360 / 60;
        for (let i = 0; i < 24; i++) {
          const x = Math.sin(hourDeg * (i - hour) * (Math.PI / 180)) * 200;
          const y = Math.cos(hourDeg * (i - hour) * (Math.PI / 180)) * 200;
          if (i < 10) {
            const z = "0" + i;
            ctx.fillText(z, 250 + x, 250 - y);
          } else {
            ctx.fillText(i.toString(), 250 + x, 250 - y);
          }
          ctx.save();
        }
        for (let i = 0; i < 60; i++) {
          const x = Math.sin(minuteDeg * (i - minute) * (Math.PI / 180)) * 180;
          const y = Math.cos(minuteDeg * (i - minute) * (Math.PI / 180)) * 180;
          if (i < 10) {
            const z = "0" + i;
            ctx.fillText(z, 250 + x, 250 - y);
          } else {
            ctx.fillText(i.toString(), 250 + x, 250 - y);
          }
          ctx.save();
        }
        for (let i = 0; i < 60; i++) {
          const x = Math.sin(minuteDeg * (i - second) * (Math.PI / 180)) * 160;
          const y = Math.cos(minuteDeg * (i - second) * (Math.PI / 180)) * 160;
          if (i < 10) {
            const z = "0" + i;
            ctx.fillText(z, 250 + x, 250 - y);
          } else {
            ctx.fillText(i.toString(), 250 + x, 250 - y);
          }
          ctx.save();
        }
      }
    },
  },
  mounted() {
    const self = this;
    this.initClock();
    setInterval(() => {
      self.initClock();
    }, 1000);
  },
};
</script>

<style lang="less"></style>
