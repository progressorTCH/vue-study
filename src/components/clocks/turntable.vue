<template>
  <div id="content">
    <div class="contain">
      <div class="hourContent" id="hourContent">
        <div class="hourContain" id="hourContain">
          <div class="hour">00</div>
          <div class="hour">01</div>
          <div class="hour">02</div>
          <div class="hour">03</div>
          <div class="hour">04</div>
          <div class="hour">05</div>
          <div class="hour">06</div>
          <div class="hour">07</div>
          <div class="hour">08</div>
          <div class="hour">09</div>
          <div class="hour">10</div>
          <div class="hour">11</div>
          <div class="hour">12</div>
          <div class="hour">13</div>
          <div class="hour">14</div>
          <div class="hour">15</div>
          <div class="hour">16</div>
          <div class="hour">17</div>
          <div class="hour">18</div>
          <div class="hour">19</div>
          <div class="hour">20</div>
          <div class="hour">21</div>
          <div class="hour">22</div>
          <div class="hour">23</div>
        </div>
      </div>
      <div class="minuteContent" id="minuteContent">
        <div class="minuteContain" id="minuteContain">
          <div class="minute">00</div>
          <div class="minute">01</div>
          <div class="minute">02</div>
          <div class="minute">03</div>
          <div class="minute">04</div>
          <div class="minute">05</div>
          <div class="minute">06</div>
          <div class="minute">07</div>
          <div class="minute">08</div>
          <div class="minute">09</div>
          <div class="minute">10</div>
          <div class="minute">11</div>
          <div class="minute">12</div>
          <div class="minute">13</div>
          <div class="minute">14</div>
          <div class="minute">15</div>
          <div class="minute">16</div>
          <div class="minute">17</div>
          <div class="minute">18</div>
          <div class="minute">19</div>
          <div class="minute">20</div>
          <div class="minute">21</div>
          <div class="minute">22</div>
          <div class="minute">23</div>
          <div class="minute">24</div>
          <div class="minute">25</div>
          <div class="minute">26</div>
          <div class="minute">27</div>
          <div class="minute">28</div>
          <div class="minute">29</div>
          <div class="minute">30</div>
          <div class="minute">31</div>
          <div class="minute">32</div>
          <div class="minute">33</div>
          <div class="minute">34</div>
          <div class="minute">35</div>
          <div class="minute">36</div>
          <div class="minute">37</div>
          <div class="minute">38</div>
          <div class="minute">39</div>
          <div class="minute">40</div>
          <div class="minute">41</div>
          <div class="minute">42</div>
          <div class="minute">43</div>
          <div class="minute">44</div>
          <div class="minute">45</div>
          <div class="minute">46</div>
          <div class="minute">47</div>
          <div class="minute">48</div>
          <div class="minute">49</div>
          <div class="minute">50</div>
          <div class="minute">51</div>
          <div class="minute">52</div>
          <div class="minute">53</div>
          <div class="minute">54</div>
          <div class="minute">55</div>
          <div class="minute">56</div>
          <div class="minute">57</div>
          <div class="minute">58</div>
          <div class="minute">59</div>
        </div>
      </div>
      <div class="sencondContent" id="sencondContent">
        <div class="secondContain" id="secondContain">
          <div class="second">00</div>
          <div class="second">01</div>
          <div class="second">02</div>
          <div class="second">03</div>
          <div class="second">04</div>
          <div class="second">05</div>
          <div class="second">06</div>
          <div class="second">07</div>
          <div class="second">08</div>
          <div class="second">09</div>
          <div class="second">10</div>
          <div class="second">11</div>
          <div class="second">12</div>
          <div class="second">13</div>
          <div class="second">14</div>
          <div class="second">15</div>
          <div class="second">16</div>
          <div class="second">17</div>
          <div class="second">18</div>
          <div class="second">19</div>
          <div class="second">20</div>
          <div class="second">21</div>
          <div class="second">22</div>
          <div class="second">23</div>
          <div class="second">24</div>
          <div class="second">25</div>
          <div class="second">26</div>
          <div class="second">27</div>
          <div class="second">28</div>
          <div class="second">29</div>
          <div class="second">30</div>
          <div class="second">31</div>
          <div class="second">32</div>
          <div class="second">33</div>
          <div class="second">34</div>
          <div class="second">35</div>
          <div class="second">36</div>
          <div class="second">37</div>
          <div class="second">38</div>
          <div class="second">39</div>
          <div class="second">40</div>
          <div class="second">41</div>
          <div class="second">42</div>
          <div class="second">43</div>
          <div class="second">44</div>
          <div class="second">45</div>
          <div class="second">46</div>
          <div class="second">47</div>
          <div class="second">48</div>
          <div class="second">49</div>
          <div class="second">50</div>
          <div class="second">51</div>
          <div class="second">52</div>
          <div class="second">53</div>
          <div class="second">54</div>
          <div class="second">55</div>
          <div class="second">56</div>
          <div class="second">57</div>
          <div class="second">58</div>
          <div class="second">59</div>
        </div>
      </div>
      <div class="showArea"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TurntableClock",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds() + 1;
    const s = 1000;
    const delays = 1000 - time.getMilliseconds();
    function turnHour() {
      const elHour = document.getElementById("hourContain");
      if (elHour != null) {
        elHour.style.transform = "rotate(-" + 15 * hour + "deg)";
      }
    }
    function turnMinute() {
      const elMin = document.getElementById("minuteContain");
      if (elMin != null) {
        elMin.style.transform = "rotate(-" + 6 * minute + "deg)";
        if (minute === 0) {
          hour++;
          if (hour === 24) {
            hour = 0;
          }
          turnHour();
        }
      }
    }
    function turnSecond() {
      const elSec = document.getElementById("secondContain");
      if (elSec != null) {
        elSec.style.transform = "rotate(-" + 6 * second + "deg)";
        if (second === 0) {
          minute++;
          if (minute === 60) {
            minute = 0;
          }
          turnMinute();
        }
        second++;
        if (second === 60) {
          second = 0;
        }
      }
    }
    setTimeout(() => {
      turnSecond();
      turnMinute();
      turnHour();
      setInterval(() => {
        turnSecond();
      }, s);
    }, delays);
  },
};
</script>

<style lang="less">
@containSize: 560px;
@hourContainSize: 510px;
@minuteContainSize: 460px;
@secondContainSize: 410px;
@msdeg: 6deg;
@hdeg: 15deg;
@hn: 24;
@msn: 60;
@fontSize: 12px;
@showAreaSize: 80px;

#content {
  width: @containSize;
  height: @containSize;
  font-size: @fontSize;
  line-height: @fontSize;

  .contain {
    width: @containSize;
    height: @containSize;
    position: relative;

    .hour,
    .minute,
    .second {
      width: 24px;
    }

    .hourContent {
      width: @hourContainSize;
      height: @hourContainSize;
      top: ((@containSize - @hourContainSize)/2);
      left: ((@containSize - @hourContainSize)/2);
      position: absolute;

      .hourContain {
        width: @hourContainSize;
        height: @hourContainSize;
        position: relative;

        .hour {
          position: absolute;
          left: calc(50% - (@fontSize));
          top: calc(50% - (@fontSize / 2));
          text-align: center;
        }

        .loop(@i) when(@i<=@hn) {
          .hour:nth-child(@{i}) {
            transform: rotate((@hdeg * (@i - 1)))
              translateY((-@hourContainSize / 2 + @fontSize));
          }

          .loop(@i + 1);
        }

        .loop(1);
      }
    }

    .minuteContent {
      width: @minuteContainSize;
      height: @minuteContainSize;
      top: ((@containSize - @minuteContainSize)/2);
      left: ((@containSize - @minuteContainSize)/2);
      position: absolute;

      .minuteContain {
        width: @minuteContainSize;
        height: @minuteContainSize;
        position: relative;

        .minute {
          position: absolute;
          left: calc(50% - (@fontSize));
          top: calc(50% - (@fontSize / 2));
          text-align: center;
        }

        .loop(@i) when(@i<=@msn) {
          .minute:nth-child(@{i}) {
            transform: rotate((@msdeg * (@i - 1)))
              translateY((-@minuteContainSize / 2 + @fontSize));
          }

          .loop(@i + 1);
        }

        .loop(1);
      }
    }

    .sencondContent {
      width: @secondContainSize;
      height: @secondContainSize;
      top: ((@containSize - @secondContainSize)/2);
      left: ((@containSize - @secondContainSize)/2);
      position: absolute;

      .secondContain {
        width: @secondContainSize;
        height: @secondContainSize;
        position: relative;

        .second {
          position: absolute;
          left: calc(50% - (@fontSize));
          top: calc(50% - (@fontSize / 2));
          text-align: center;
        }

        .loop(@i) when(@i<=@msn) {
          .second:nth-child(@{i}) {
            transform: rotate((@msdeg * (@i - 1)))
              translateY((-@secondContainSize / 2 + @fontSize));
          }

          .loop(@i + 1);
        }

        .loop(1);
      }
    }

    .showArea {
      height: @showAreaSize - 10px;
      width: @fontSize * 1.6;
      outline: 2px solid red;
      position: absolute;
      left: calc(50% - (@fontSize*0.8));
      top: ((@containSize - @hourContainSize) / 2 - @fontSize / 4 + 5px);
    }
  }
}
</style>
