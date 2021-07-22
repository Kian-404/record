<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-06-09 17:00:26
 * @LastEditTime: 2021-07-21 16:54:34
-->
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
}
</style>