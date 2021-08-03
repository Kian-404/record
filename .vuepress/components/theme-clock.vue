<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-08-03 14:25:29
 * @LastEditTime: 2021-08-03 15:15:47
-->
<template>
  <div class="theme-clock" :class="themeMode">
    <button class="toggle" @click="toggleTheme">{{ themeText }}</button>

    <div class="clock-container">
      <div class="clock">
        <div
          class="needle hour"
          :style="{
            transform: `translate(-50%, -100%) rotate(${scale(
              hoursForClock,
              0,
              12,
              0,
              360
            )}deg)`,
          }"
        ></div>
        <div
          class="needle minute"
          :style="{
            transform: `translate(-50%, -100%) rotate(${scale(
              minutes,
              0,
              60,
              0,
              360
            )}deg)`,
          }"
        ></div>
        <div
          class="needle second"
          :style="{
            transform: `translate(-50%, -100%) rotate(${scale(
              seconds,
              0,
              60,
              0,
              360
            )}deg)`,
          }"
        ></div>
        <div class="center-point"></div>
      </div>

      <div class="time">
        {{ timeText }}
      </div>
      <div class="date">
        {{ `${days[this.day]}, ${months[this.month]}` }}
        <span class="circle">{{ this.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      day: 0,
      date: 0,
      month: 0,
      hours: 0,
      hoursForClock: 0,
      minutes: 0,
      seconds: 0,
      ampm: "AM",
      themeMode: "",
      themeText: "Dark Mode",
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  computed: {
    timeText() {
      return `${this.hoursForClock}:${
        this.minutes < 10 ? `0${this.minutes}` : this.minutes
      } ${this.ampm}`;
    },
    dateText() {
      return `${this.days[this.day]}, ${this.months[this.month]}`;
    },
  },
  methods: {
    toggleTheme() {
      this.themeMode = this.themeMode == "" ? "dark" : "";
      this.themeText = this.themeMode == "" ? "Dark Mode" : "Light Mode";
    },
    setTime() {
      const time = new Date();
      this.month = time.getMonth();
      this.day = time.getDay();
      this.date = time.getDate();
      this.hours = time.getHours();
      this.hoursForClock = this.hours >= 13 ? this.hours % 12 : this.hours;
      this.minutes = time.getMinutes();
      this.seconds = time.getSeconds();
      this.ampm = this.hours >= 12 ? "PM" : "AM";
    },
    scale(num, in_min, in_max, out_min, out_max) {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    },
  },
  mounted() {
    this.setTime();
    setInterval(this.setTime, 1000);
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css?family=Heebo:300&display=swap");

* {
  box-sizing: border-box;
}

.theme-clock {
  --primary-color: #000;
  --secondary-color: #fff;
}

.theme-clock {
  font-family: "Heebo", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  overflow: hidden;
  margin: 0;
  position: relative;
}
.theme-clock {
  transition: all 0.5s ease-in;
}

.theme-clock.dark {
  --primary-color: #fff;
  --secondary-color: #333;
}

.theme-clock.dark {
  background-color: #111;
  color: var(--primary-color);
}

.toggle {
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  top: 20px;
}

.toggle:focus {
  outline: none;
}

.clock-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
}

.clock {
  position: relative;
  width: 200px;
  height: 200px;
}

.needle {
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
}

.needle.hour {
  transform: translate(-50%, -100%) rotate(0deg);
}

.needle.minute {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
}

.needle.second {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: #e74c3c;
}

.center-point {
  background-color: #e74c3c;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.center-point::after {
  content: "";
  background-color: var(--primary-color);
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.time {
  font-size: 60px;
}

.date {
  color: #aaa;
  font-size: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.date .circle {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 18px;
  transition: all 0.5s ease-in;
  font-size: 12px;
}
</style>