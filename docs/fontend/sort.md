---
title: 手写快排、冒泡、选择排序
date: 2021-09-17
sidebar: auto
tags:
 - frontend
 - sort
categories: 
 - frontend
---
:::tip
快排、冒泡、选择排序

:::

<!-- more -->

## 快速排序

```js
const quickSort = (nums) => {
  if(nums.length < 2){ //数组个数小于两个直接返回
    return nums;
  }else {
    var left = [];
    var right = [];
    var pivot = Math.floor(nums.length / 2); //获取中间的下标位置
    var base = nums.splice(pivot, 1)[0];
    for(let i = 0; i < nums.length; i++){
      if(nums[i] < base){
        left.push(nums[i]);
      }else{
        right.push(nums[i]);
      }
    }
    console.log('left',left);
    console.log('right',right);
  }
  return quickSort(left).concat([base], quickSort(right));
}
```

------

## 冒泡排序

```js
const bubbleSort = (nums) =>{
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length -1 -i; j++){
      if(nums[j] > nums[j+1]){
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
      }
    }
  }
  return nums;
}
```
------

## 选择排序

```js
const selectSort = (nums) =>{
  let index = 0;
  for(let i = 0;  i < nums.length-1; i++){
    index = i;
    for(let j = i+1; j < nums.length; j++){
      if(nums[j] < nums[index]){
        index = j;
      }
    }
    if(nums[i] > nums[index]){
      [nums[i], nums[index]] = [nums[index], nums[i]]
    }
  }
  return nums;
}

```