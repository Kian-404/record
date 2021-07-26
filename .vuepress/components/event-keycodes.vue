<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-07-26 09:51:58
 * @LastEditTime: 2021-07-26 10:14:08
-->
<template>
  <div class="event-keycodes">
    <div class="insert">
      <div class="key" v-if="firstOpen">Press any key to get the keyCode</div>
      <div v-else>
        <div class="key">
          {{ key.key == " " ? "Space" : key.key }}
          <small>event.key</small>
        </div>
        <div class="key">
          {{ key.keyCode }}
          <small>envent.keyCode</small>
        </div>
        <div class="key">
          {{ key.code }}
          <small>event.code</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstOpen: true,
      key: {
        code: "",
        keyCode: "",
        key: "",
      },
    };
  },
  methods: {
    keydown(key) {
      this.firstOpen = false;
      console.log(key);
      this.key = key;
    },
  },
  mounted() {
    window.addEventListener("keydown", this.keydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.keydown);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

* {
  box-sizing: border-box;
}

.event-keycodes {
  background-color: steelblue;
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60vh;
  overflow: hidden;
  margin: 0;
}

.key {
  border: 1px solid #999;
  background-color: #9adbbe;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
  position: relative;
}

.key small {
  position: absolute;
  top: -24px;
  left: 0;
  text-align: center;
  width: 100%;
  color: #9adbbe;
  font-size: 14px;
}
</style>