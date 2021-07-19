<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-07-19 10:38:35
 * @LastEditTime: 2021-07-19 10:56:19
-->
<template>
  <div class="hoverboard">
    <div class="container">
      <div
        class="square"
        v-for="item in SQUARES"
        :key="item"
        @mousemove="setColor($event)"
        @mouseout="removeColor($event)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SQUARES: 500,
      colors: ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"],
    };
  },
  methods: {
    setColor(item) {
      console.log(item);
      const element = item.target;
      const color = this.getRandomColor();
      element.style.backgroundColor = color;
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    },
    removeColor(item) {
      const element = item.target;
      element.style.background = "#1d1d1d";
      element.style.boxShadow = "0 0 2px #000";
    },
    getRandomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },
};
</script>

<style scoped>
.hoverboard {
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  overflow: hidden;
  margin: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 400px;
}

.square {
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  height: 16px;
  width: 16px;
  margin: 2px;
  transition: 2s ease;
}

.square:hover {
  transition-duration: 0s;
}
</style>