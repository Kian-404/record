---
title: hello
date: 2021-05-25
tags:
 - hello
categories: 
 - hello
keys:
 - 'e10adc3949ba59abbe56e057f20f883e'
---

:::tip
测试加密功能
:::
<!--more -->

hello page test

<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/.vuepress/components/demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/.vuepress/components/demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/.vuepress/components/demo.vue?style
  </template>
  <demo slot="demo"></demo>
</RecoDemo>