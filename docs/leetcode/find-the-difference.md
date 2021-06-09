---
title: 找不同
date: 2021-06-04
sidebar: true
tags:
 - leetCode
categories: 
 - leetCode
---

:::tip

[find-the-difference](https://leetcode-cn.com/problems/find-the-difference/) 

:::

<!-- more -->

> 给定两个字符串 s 和 t，它们只包含小写字母。
>
> 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
>
> 请找出在 t 中被添加的字母。


------

#### 示例1
```bash
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
```

#### 示例2
```bash
输入：s = "", t = "y"
输出："y"
```

#### 示例3
```bash
输入：s = "a", t = "aa"
输出："a"
```

#### 示例4
```bash
输入：s = "ae", t = "aea"
输出："a"
```
::: tip 提示
0 <= s.length <= 1000

t.length == s.length + 1

s 和 t 只包含小写字母
:::

### 思路

将字符串 `s` 中每个字符转换成 `ASCII` 码的值然后求和，得到 `SUMs`；对字符串 `t` 同样的方法得到 `SUMt`。两者的差值 `SUMt-SUMs`即代表了被添加的字符。

```js
var findTheDifference = function(s, t) {
    let SUMs = 0, SUMt = 0;
    for (let i = 0; i < s.length; i++) {
        SUMs += s[i].charCodeAt();
    }
    for (let i = 0; i < t.length; i++) {
        SUMt += t[i].charCodeAt();
    }
    return String.fromCharCode(SUMt - SUMs);
};
```