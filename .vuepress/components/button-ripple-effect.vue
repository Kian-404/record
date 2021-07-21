<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-07-21 10:34:50
 * @LastEditTime: 2021-07-21 13:55:53
-->
<template>
  <div class="button-ripple-effect">
    <button class="btn" @click="rippleEffect($event)">
      Click Me
      <span class="circle" v-if="show" :style="{ top: top, left: left }"></span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: "",
      left: "",
      show: false,
    };
  },
  methods: {
    rippleEffect(event) {
      console.log(event);
      const el = event.target;

      const x = event.clientX;
      const y = event.clientY;
      const buttonTop = el.getBoundingClientRect().top;
      const buttonLeft = el.getBoundingClientRect().left;

      const xInside = x - buttonLeft;
      const yInside = y - buttonTop;
      this.top = `${yInside}px`;
      this.left = `${xInside}px`;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 500);
    },
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.button-ripple-effect {
  background-color: steelblue;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  overflow: hidden;
  margin: 0;
}
.btn {
  background-color: purple;
  color: #fff;
  border: 1px purple solid;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 30px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
}

.btn:focus {
  outline: none;
}

.btn .circle {
  position: absolute;
  background-color: #fff;
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: scale 0.5s ease-out;
}

@keyframes scale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
</style>