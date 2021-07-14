<template>
  <div class="scroll-animation">
    <h1>Scroll to see the animation</h1>
    <div class="box" v-for="(item, index) in boxList" :key="index">
      <h1>Content</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxList: 10,
      boxes: null,
      scrollContent: null,
    };
  },
  methods: {
    checkBoxs() {
      let triggerBottom = null;
      let innerHeight =
        this.scrollContent.offsetHeight +
        this.scrollContent.getBoundingClientRect().top;
      if (window.innerHeight < innerHeight) {
        triggerBottom = (window.innerHeight / 3) * 2;
      } else {
        triggerBottom = (innerHeight / 3) * 2;
      }
      this.boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    },
  },
  mounted() {
    this.boxes = document.querySelectorAll(".box");
    this.scrollContent = document.querySelector(".scroll-animation");
    this.checkBoxs();
    window.addEventListener("resize", this.checkBoxs);
    this.scrollContent.addEventListener("scroll", this.checkBoxs);
  },
  destroyed() {
    this.scrollContent.removeEventListener("scroll", this.checkBoxs);
    window.removeEventListener("resize", this.checkBoxs);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.scroll-animation {
  background-color: #efedd6;
  font-family: "Roboto", sans-serif;
  margin: 0;
  height: 60vh;
  overflow-x: hidden;
}

h1 {
  margin: 10px auto;
  text-align: center;
}

.box {
  background-color: steelblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  transform: translateX(400%);
  transition: transform 0.4s ease;
}

.box:nth-of-type(even) {
  transform: translateX(-400%);
}

.box.show {
  transform: translateX(0);
}

.box h1 {
  font-size: 45px;
}
</style>