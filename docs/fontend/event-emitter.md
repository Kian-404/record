---
title: 实现一个发布订阅模式
date: 2021-09-10
sidebar: auto
tags:
 - js
categories: 
 - frontend
---
:::tip
实现一个发布订阅模式
:::

<!-- more -->

![发布订阅模式](./img/event-emitter.png)


## 定义
>    发布-订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知。  
> 订阅者（`Subscriber`）把订阅的事件注册（`Subscribe`）到调度中心（`Event Channel`），当发布者（`Publisher`）发布该事件（`Publish Event`）到调度中心，也就是该事件触发时，由调度中心统一调度（`Fire Event`）订阅者注册到调度中心的处理代码。


## 实现思路
- 创建一个对象
- 在该对象上创建一个缓存列表（调度中心）
- `on` 方法用来把函数 `handler` 都加到缓存列表中（订阅者注册事件到调度中心）
- `emit` 方法取到 `arguments` 里第一个当做 `events`，根据 `events` 值去执行对应缓存列表中的函数（发布者发布事件到调度中心，调度中心处理代码）
- `off` 方法可以根据 `events` 值取消订阅（取消订阅）
- `once` 方法只监听一次，调用完毕后删除缓存函数（订阅一次）

## 实现代码

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, handler) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(handler);
  }

  addListener(type,handler){
    this.on(type,handler)
  }

  prependListener(type, handler) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].unshift(handler);
  }

  removeListener(type, handler) {
    if (!this.events[type]) {
      return;
    }
    this.events[type] = this.events[type].filter(item => item !== handler);
  }

  off(type,handler){
    this.removeListener(type,handler)
  }

  emit(type, ...args) {
    this.events[type].forEach((item) => {
      Reflect.apply(item, this, args);
    });
  }

  once(type, handler) {
    this.on(type, this._onceWrap(type, handler, this));
  }

  _onceWrap(type, handler, target) {
    const state = { fired: false, handler, type , target};
    const wrapFn = this._onceWrapper.bind(state);
    state.wrapFn = wrapFn;
    return wrapFn;
  }

  _onceWrapper(...args) {
    if (!this.fired) {
      this.fired = true;
      Reflect.apply(this.handler, this.target, args);
      this.target.off(this.type, this.wrapFn);
    }
  }
}

```