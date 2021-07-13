<template>
  <div class="blurry-loading">
    <section class="bg" :style="{ filter: filter }"></section>
    <div class="loading-text" :style="{ opacity: opacity }">{{ load }}%</div>
  </div>
</template>

<script>
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
export default {
  data() {
    return {
      load: 0,
      int: 0,
      opacity: 1,
      filter: `blur(30px)`,
    };
  },
  methods: {
    blurring() {
      this.load++;
      if (this.load > 99) {
        clearInterval(this.int);
      }
      this.opacity = scale(this.load, 0, 100, 1, 0);
      this.filter = `blur(${scale(this.load, 0, 100, 30, 0)}px)`;
    },
  },
  mounted() {
    this.int = setInterval(() => {
      this.blurring();
    }, 30);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

.blurry-loading {
  font-family: "Ubuntu", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  overflow: hidden;
  margin: 0;
}

.bg {
  background: url("https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80")
    no-repeat center center/cover;
  position: relative;
  width: 100%;
  height: calc(100vh);
  z-index: -1;
  filter: blur(0px);
}

.loading-text {
  position: absolute;
  font-size: 50px;
  color: #fff;
}
</style>