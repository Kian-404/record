<template>
  <div class="split-landing-page">
    <div class="container">
      <div class="split left">
        <h1>Playstation 5</h1>
        <a href="" class="btn">Buy Now</a>
      </div>
      <div class="split right">
        <h1>XBox Series X</h1>
        <a href="" class="btn">Buy Now</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addEventListener() {
      const left = document.querySelector(".split.left");
      const right = document.querySelector(".split.right");
      const container = document.querySelector(".container");
      left.addEventListener("mouseenter", () => {
        container.classList.add("hover-left");
      });
      left.addEventListener("mouseleave", () => {
        container.classList.remove("hover-left");
      });

      right.addEventListener("mouseenter", () => {
        container.classList.add("hover-right");
      });
      right.addEventListener("mouseleave", () => {
        container.classList.remove("hover-right");
      });
    },
  },
  mounted() {
    this.addEventListener();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.split-landing-page {
  --left-bg-color: rgba(87, 84, 236, 0.7);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --left-btn-hover-color: rgba(87, 84, 236, 1);
  --right-btn-hover-color: rgba(28, 122, 28, 1);
  --hover-width: 75%;
  --other-width: 25%;
  --speed: 1000ms;
}

.split-landing-page {
  font-family: "Roboto", sans-serif;
  height: 60vh;
  overflow: hidden;
  margin: 0;
}

h1 {
  font-size: 3rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  text-decoration: none;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 15rem;
  padding: 1.5rem;
}

.split.left .btn:hover {
  background-color: var(--left-btn-hover-color);
  border-color: var(--left-btn-hover-color);
}

.split.right .btn:hover {
  background-color: var(--right-btn-hover-color);
  border-color: var(--right-btn-hover-color);
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.split.left {
  left: 0;
  background: url("./50project/img/ps.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.split.left::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--left-bg-color);
}

.split.right {
  right: 0;
  background: url("./50project/img/xbox.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.split.right::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--right-bg-color);
}

.split.right,
.split.left,
.split.right::before,
.split.left::before {
  transition: all var(--speed) ease-in-out;
}

.hover-left .left {
  width: var(--hover-width);
}

.hover-left .right {
  width: var(--other-width);
}

.hover-right .right {
  width: var(--hover-width);
}

.hover-right .left {
  width: var(--other-width);
}

@media (max-width: 800px) {
  h1 {
    font-size: 2rem;
    top: 30%;
  }

  .btn {
    padding: 1.2rem;
    width: 12rem;
  }
}
</style>