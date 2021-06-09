<template>
  <div id="bbtalk"></div>
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
</style>