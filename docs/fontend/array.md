---
title: JavaScript中数组去重
date: 2021-05-25
sidebar: auto
tags:
 - array
categories: 
 - frontend
---

:::tip
本文主要介绍了数组去重的几种不同的方式

:::

<!-- more -->
### 利用ES6中的Set去重

```js
function unique(arr){
	var set = new Set(arr);
	return [...set];
}
```


----------
### 利用indexOf来去重
	
```js
function unique(arr){
	var length = arr.length;
	var item = [];
	for(var i=0; i< length; i++){
		if(item.indexOf(arr[i])<0){
			item.push(arr[i]);
		}else{
			continue;
		}
	}
	return item;
}
```


----------
### 利用对象的方式去重

```js
function unique(arr){
	var obj = {},
		i=0, 
		len =0;
	if(Array.isArray(arr) && arr.length >0){
		len = arr.length;
		for(i=0; i<len; i++){
			obj[arr[i]] = arr[i];
		}
		return Object.keys(obj);
	}
	return [];
}

```
----------

### 先排序再判断前后元素是否相等

```js
function unique(arr){
	var sortarr = arr.sort();
	var results = [];
	var length = arr.length;
	for(var i=0; i<length; i++){
		if(sortarr[i+1] !== sortarr[i]){
			results.push(sortarr[i]);
		}
	}
	return results;
}
```


----------

### 利用filter来实现去重

```js
function unique(arr){
	var res = arr.filter(function(item, index, arr){
		return arr.indexOf(item) === index;
	})

	return res;
}
```