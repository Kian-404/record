<template>
  <div class="talk-content">
    <div id="bbtalk"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      bbtalk.init({
        appId: "E6YqJifXrN9dNvXkuNkS6lBn-gzGzoHsz",
        appKey: "eTBk7GP3ux0IjbHCYh3B21iC",
        serverURLs: "https://e6yqjifx.lc-cn-n1-shared.com",
      });
    });
  },
};
</script>

<style scoped>
.talk-content {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 5px #0aef02;
}
</style>