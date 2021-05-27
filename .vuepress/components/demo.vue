<template>
  <div class="wrapper">
    <input type="text" v-model="message" />
    <p>{{ message }}.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "welcome to visited,thanks!!! ",
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrapper {
  color: green;
}
</style>