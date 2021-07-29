<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-07-29 15:25:40
 * @LastEditTime: 2021-07-29 15:50:06
-->
<template>
  <div class="auto-text-effect">
    <h1 id="text">Starting...</h1>
    <div class="control">
      <label for="speed">Speed:</label>
      <input
        type="number"
        name="speed"
        id="speed"
        @change="changeVal"
        v-model="speed"
        min="1"
        max="10"
        step="1"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      speed: 1,
      idx: 1,
      text: "We Love Programming!",
    };
  },
  methods: {
    writeText() {
      const textEl = document.getElementById("text");
      textEl.innerText = this.text.slice(0, this.idx);
      this.idx++;
      if (this.idx > this.text.length) {
        this.idx = 1;
      }
      setTimeout(this.writeText, 300 / this.speed);
    },
    changeVal() {
      console.log(this.speed);
      // this.writeText();
    },
  },
  mounted() {
    this.writeText();
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

.auto-text-effect {
  background-color: darksalmon;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  overflow: hidden;
  position: relative;
  margin: 0;
}

.control {
  position: absolute;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  font-size: 18px;
}

input {
  width: 50px;
  padding: 5px;
  font-size: 18px;
  background-color: darksalmon;
  border: none;
  text-align: center;
}

input:focus {
  outline: none;
}
</style>