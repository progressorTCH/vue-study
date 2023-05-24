<template lang="vue">
  <div id="cardTurnableContain">
    <div class="innerContain">
      <div class="unitMinute" :class="hourStateClass">
      <div class="cardContent cardContent1">
          <div class="card cardTop">{{hourNum1>9?hourNum1:"0" + hourNum1}}</div>
          <div class="card cardBottom">{{hourNum2>9?hourNum2:"0" + hourNum2}}</div>
      </div>
      <div class="cardContent cardContent2">
          <div class="card cardTop">{{hourNum2>9?hourNum2:"0" + hourNum2}}</div>
          <div class="card cardBottom">{{hourNum3>9?hourNum3:"0" + hourNum3}}</div>
      </div>
      <div class="cardContent cardContent3">
          <div class="card cardTop">{{hourNum3>9?hourNum3:"0" + hourNum3}}</div>
          <div class="card cardBottom">{{hourNum4>9?hourNum4:"0" + hourNum4}}</div>
      </div>
      <div class="cardContent cardContent4">
          <div class="card cardTop">{{hourNum4>9?hourNum4:"0" + hourNum4}}</div>
          <div class="card cardBottom">{{hourNum1>9?hourNum1:"0" + hourNum1}}</div>
      </div>
    </div>
    <div class="timeSeparate">:</div>
    <div class="unitMinute" :class="minuteStateClass">
      <div class="cardContent cardContent1">
          <div class="card cardTop">{{minuteNum1>9?minuteNum1:"0" + minuteNum1}}</div>
          <div class="card cardBottom">{{minuteNum2>9?minuteNum2:"0" + minuteNum2}}</div>
      </div>
      <div class="cardContent cardContent2">
          <div class="card cardTop">{{minuteNum2>9?minuteNum2:"0" + minuteNum2}}</div>
          <div class="card cardBottom">{{minuteNum3>9?minuteNum3:"0" + minuteNum3}}</div>
      </div>
      <div class="cardContent cardContent3">
          <div class="card cardTop">{{minuteNum3>9?minuteNum3:"0" + minuteNum3}}</div>
          <div class="card cardBottom">{{minuteNum4>9?minuteNum4:"0" + minuteNum4}}</div>
      </div>
      <div class="cardContent cardContent4">
          <div class="card cardTop">{{minuteNum4>9?minuteNum4:"0" + minuteNum4}}</div>
          <div class="card cardBottom">{{minuteNum1>9?minuteNum1:"0" + minuteNum1}}</div>
      </div>
    </div>
    <div class="timeSeparate">:</div>
    <div class="unitSecond" :class="stateClass">
      <div class="cardContent cardContent1">
          <div class="card cardTop">{{num1>9?num1:"0" + num1}}</div>
          <div class="card cardBottom">{{num2>9?num2:"0" + num2}}</div>
      </div>
      <div class="cardContent cardContent2">
          <div class="card cardTop">{{num2>9?num2:"0" + num2}}</div>
          <div class="card cardBottom">{{num3>9?num3:"0" + num3}}</div>
      </div>
      <div class="cardContent cardContent3">
          <div class="card cardTop">{{num3>9?num3:"0" + num3}}</div>
          <div class="card cardBottom">{{num4>9?num4:"0" + num4}}</div>
      </div>
      <div class="cardContent cardContent4">
          <div class="card cardTop">{{num4>9?num4:"0" + num4}}</div>
          <div class="card cardBottom">{{num1>9?num1:"0" + num1}}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardTurnable",
  mounted() {
    this.initClock();
    this.aInterval = setInterval(() => {
      this.second++;
      if (this.second == 60) {
        this.second = 0;
        this.num1 = 0;
        this.num2 = 1;
        this.num3 = 2;
        this.minute++;
      }
      if (this.minute == 60) {
        this.minute = 0;
        this.minuteNum1 = 0;
        this.minuteNum2 = 1;
        this.minuteNum3 = 2;
        this.hour++;
      }
      if (this.hour == 24) {
        this.hour = 0;
        this.minuteNum1 = 0;
        this.minuteNum2 = 1;
        this.minuteNum3 = 2;
      }
      let state = this.second % 4;
      let count = Math.floor(this.second / 4);
      if (this.second > 3) {
        switch (state) {
          case 0:
            this.num1 = count * 4;
            break;
          case 1:
            this.num2 = count * 4 + 1;
            break;
          case 2:
            this.num3 = count * 4 + 2;
            break;
          case 3:
            this.num4 = count * 4 + 3;
            break;
        }
      }
      let minuteState = this.minute % 4;
      let minuteCount = Math.floor(this.minute / 4);
      if (this.minute > 3) {
        switch (minuteState) {
          case 0:
            this.minuteNum1 = minuteCount * 4;
            break;
          case 1:
            this.minuteNum2 = minuteCount * 4 + 1;
            break;
          case 2:
            this.minuteNum3 = minuteCount * 4 + 2;
            break;
          case 3:
            this.minuteNum4 = minuteCount * 4 + 3;
            break;
        }
      }
      let hourState = this.hour % 4;
      let hourCount = Math.floor(this.hour / 4);
      if (this.hour > 3) {
        switch (hourState) {
          case 0:
            this.hourNum1 = hourCount * 4;
            break;
          case 1:
            this.hourNum2 = hourCount * 4 + 1;
            break;
          case 2:
            this.hourNum3 = hourCount * 4 + 2;
            break;
          case 3:
            this.hourNum4 = hourCount * 4 + 3;
            break;
        }
      }
      this.stateClass = "state" + state;
      this.minuteStateClass = "state" + minuteState;
      this.hourStateClass = "state" + hourState;
      if (this.second == 1) {
        this.num4 = 3;
      }
      if (this.minute == 1) {
        this.minuteNum4 = 3;
      }
      if (this.hour == 1) {
        this.hourNum4 = 3;
      }
    }, 1000);
  },
  data() {
    return {
      second: 0,
      minute: 0,
      hour: 0,
      stateClass: "state0",
      minuteStateClass: "state0",
      hourStateClass: "state0",
      num1: 0,
      num2: 1,
      num3: 2,
      num4: 3,
      minuteNum1: 0,
      minuteNum2: 1,
      minuteNum3: 2,
      minuteNum4: 3,
      hourNum1: 0,
      hourNum2: 1,
      hourNum3: 2,
      hourNum4: 3,
      aInterval: null,
    };
  },
  methods: {
    initClock() {
      let date = new Date();
      this.minute = date.getMinutes();
      this.hour = date.getHours();
      this.second = date.getSeconds();
    },
  },
  computed: {},
  unmounted() {
    clearInterval(this.aInterval);
  },
};
</script>

<style lang="less">
@containWidth: 80px;
@containHeight: 90px;
@secondDelay: 1s;
#cardTurnableContain {
  display: flex;
  width: auto;
  flex-direction: row;
  padding: 10px 14px;
  margin: 10px 20px;
  border: 1px solid #afa9cf;
  border-radius: 20px;
  width: 320px;
  background-color: #d4d1e6;
  .innerContain {
    display: flex;
    width: auto;
    flex-direction: row;
    padding: 10px 20px;
    border: 1px solid #dedaf5;
    border-radius: 16px;
    width: 280px;
    background-color: #ddd;
  }
  .timeSeparate {
    font-size: 60px;
    width: 20px;
    text-align: center;
    line-height: 80px;
    animation: fliker 2s linear infinite;
  }
  .unitSecond {
    position: relative;
    width: 80px;
    height: 90px;
    &::after {
      position: absolute;
      content: "";
      height: 2px;
      top: 49%;
      left: 0;
      width: 100%;
      z-index: 30;
      background-color: #fff;
    }
  }
  .unitMinute {
    position: relative;
    width: 80px;
    height: 90px;
    &::after {
      position: absolute;
      content: "";
      height: 2px;
      top: 49%;
      left: 0;
      width: 100%;
      z-index: 30;
      background-color: #fff;
    }
  }
  .cardContent {
    position: absolute;
    width: 80px;
    height: 90px;
    font-size: 60px;
    transition: 0.5s;
    color: rgb(67, 224, 28);
    .card {
      position: absolute;
      height: 49.5%;
      width: 100%;
      overflow: hidden;
      text-align: center;
      background-color: #000;
    }
    .cardTop {
      border-radius: 8px 8px 0 0;
      line-height: 90px;
      backface-visibility: hidden;
      transition: 0.5s;
    }
    .cardBottom {
      border-radius: 0 0 8px 8px;
      line-height: 0;
      transform: rotateX(180deg);
      transition: 0.5s;
    }
  }
  .state0 {
    .cardContent1 {
      transform: rotateX(360deg);
      z-index: 9;
      .cardTop {
        z-index: 7;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent2 {
      transform: rotateX(0deg);
      z-index: 8;
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent3 {
      z-index: 8;
      transform: rotateX(180deg);
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent4 {
      z-index: 9;
      transform: rotateX(180deg);
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 7;
      }
    }
  }
  .state1 {
    .cardContent1 {
      transform: rotateX(180deg);
      z-index: 9;
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 7;
      }
    }
    .cardContent2 {
      transform: rotateX(0deg);
      z-index: 9;
      .cardTop {
        z-index: 7;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent3 {
      z-index: 8;
      transform: rotateX(0deg);
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent4 {
      z-index: 8;
      transform: rotateX(180deg);
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 6;
      }
    }
  }
  .state2 {
    .cardContent1 {
      transform: rotateX(180deg);
      z-index: 8;
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent2 {
      transform: rotateX(180deg);
      z-index: 9;
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 7;
      }
    }
    .cardContent3 {
      z-index: 9;
      transform: rotateX(0deg);
      .cardTop {
        z-index: 7;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent4 {
      z-index: 8;
      transform: rotateX(0deg);
      .cardTop {
        z-index: 7;
      }
      .cardBottom {
        z-index: 6;
      }
    }
  }
  .state3 {
    .cardContent1 {
      transform: rotateX(360deg);
      z-index: 8;
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent2 {
      transform: rotateX(180deg);
      z-index: 8;
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 6;
      }
    }
    .cardContent3 {
      z-index: 9;
      transform: rotateX(180deg);
      .cardTop {
        z-index: 6;
      }
      .cardBottom {
        z-index: 7;
      }
    }
    .cardContent4 {
      z-index: 9;
      transform: rotateX(0deg);
      .cardTop {
        z-index: 7;
      }
      .cardBottom {
        z-index: 6;
      }
    }
  }
  @keyframes fliker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
