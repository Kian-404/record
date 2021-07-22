<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-07-22 14:10:25
 * @LastEditTime: 2021-07-22 15:08:34
-->
<template>
  <div class="background-slider">
    <div class="slider-container">
      <div
        class="slide"
        v-for="(item, index) in slideList"
        :style="{ 'background-image': `${item['background-image']}` }"
        :class="index == activeSlide ? 'active' : ''"
        :key="index"
      ></div>
    </div>
    <button class="arrow left-arrow" id="left" @click="changeSlide('left')">
      <i class="fas fa-arrow-left"></i>
    </button>

    <button class="arrow right-arrow" id="right" @click="changeSlide('right')">
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideList: [
        {
          "background-image":
            "url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        },
        {
          "background-image":
            "url('https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')",
        },
        {
          "background-image":
            "url('https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        },
        {
          "background-image":
            "url('https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80')",
        },
        {
          "background-image":
            "url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
        },
      ],
      activeSlide: 0,
    };
  },
  methods: {
    changeSlide(option) {
      if (option == "left") {
        this.activeSlide -= 1;
        if (this.activeSlide < 0) {
          this.activeSlide = this.slideList.length - 1;
        }
      } else if (option == "right") {
        this.activeSlide += 1;
        if (this.activeSlide > this.slideList.length - 1) {
          this.activeSlide = 0;
        }
      }
      this.setBgToContainer();
    },
    setBgToContainer() {
      const siderBg = document.querySelector(".background-slider");
      siderBg.style.backgroundImage =
        this.slideList[this.activeSlide]["background-image"];
    },
  },
  mounted() {
    this.setBgToContainer();
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.background-slider {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  overflow: hidden;
  margin: 0;
  background-position: center center;
  background-size: cover;
  transition: 0.4s;
  position: relative;
}

.background-slider::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 60vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
}

.slider-container {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 70%;
  width: 70%;
  position: relative;
  overflow: hidden;
}

.slide {
  opacity: 0;
  height: 100%;
  width: 100%;
  background-position: center center;
  background-size: cover;
  position: absolute;
  transition: 0.4s ease;
  z-index: 1;
}

.slide.active {
  opacity: 1;
}

.arrow {
  position: absolute;
  background-color: transparent;
  color: #fff;
  padding: 20px;
  font-size: 30px;
  border: 2px solid orange;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.arrow:focus {
  outline: 0;
}

.left-arrow {
  left: 30px;
}

.right-arrow {
  right: 30px;
}
</style>