[toc]

# HTML

## HTML5 新增了哪些新特性？如何解决标签兼容问题？

- 用于绘画的 `canvas` 元素
- 用于媒介回放的 `video` 和 `audio` 元素
- 对本地离线存储的更好的支持
- 新的特殊内容元素，比如 `article、footer、header、nav、section`
- 新的表单控件，比如 `calendar、date、time、email、url、search`

`html5shiv`

# JavaScript

## bind、call、apply

JavaScript 提供了 `call、apply、bind` 这三个方法，来切换/固定 `this` 的指向。
 
### Function.prototype.call()
 
 函数实例的 `call` 方法，可以指定函数内部的 `this`  指向（即函数执行时所在的作用域），然后在指定的作用域中，调用该函数。
 
 `call` 方法的参数，应该是一个对象。如果参数为 `空、null` 和 `undefined` ，则默认传入全局对象。
 
 ```
 var obj = {};
 
 var f = function () {
   return this;
 };
 
 f() === window // true
 f.call(obj) === obj // true
 ```
 
 `call` 方法还可以接受多个参数。`call` 的第一个参数就是 `this` 所要指向的那个对象，后面的参数则是函数调用时所需的参数。
 
 ```
 func.call(thisValue, arg1, arg2, ...)
 ```
 
 ```
 function add(a, b) {
   return a + b;
 }
 
 add.call(this, 1, 2) // 3
 ```
 
### Function.prototype.apply()
 
 `apply` 方法的作用与 `call` 方法类似，也是改变 `this` 指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数。
 
 ```
 func.apply(thisValue, [arg1, arg2, ...])
 ```
 
### Function.prototype.bind()
 
 `bind` 方法用于将函数体内的 `this` 绑定到某个对象，然后返回一个新函数。
 
 ```
 var d = new Date();
 d.getTime() // 1481869925657
 
 var print = d.getTime;
 print() // Uncaught TypeError: this is not a Date object.
 ```
 
 上面代码中，我们将 `d.getTime()` 方法赋给变量 `print`，然后调用 `print()` 就报错了。这是因为 `getTime()` 方法内部的 `this`，绑定 `Date` 对象的实例，赋给变量 `print` 以后，内部的 `this` 已经不指向 `Date` 对象的实例了。
 
 `bind()` 方法可以解决这个问题。
 
 ```
 var print = d.getTime.bind(d);
 print() // 1481869925657
 ```
 
 上面代码中，`bind()` 方法将 `getTime()` 方法内部的 `this` 绑定到 `d` 对象，这时就可以安全地将这个方法赋值给其他变量了。
 
 `bind()` 的作用与 `call()` 和 `apply()` 一样，都是可以改变函数运行时上下文，区别是 `call()` 和 `apply()` 在调用函数之后会立即执行，而 `bind()` 方法调用并改变函数运行时上下文后，返回一个新的函数，供我们需要时再调用。
 
### 如何选用
 
- 如果不需要关心具体有多少参数被传入函数，选用 `apply()`；
- 如果确定函数可接收多少个参数，并且想一目了然表达形参和实参的对应关系，用 `call()`；
- 如果我们想要将来再调用方法，不需立即得到函数返回结果，则使用 `bind()`。
 
### 特点总结
 
- `call()`、`apply()` 和 `bind()` 都是用来改变函数执行时的上下文，可借助它们实现继承；
- `call()` 和 `apply()` 唯一区别是参数不一样，`call()` 是 `apply()` 的语法糖；
- `bind()` 是返回一个新函数，供以后调用，而 `apply()` 和 `call()` 是立即调用。

## 数组去重、排序
## 什么是原型、原型链？
## 继承的几种方式
## 构造函数原理
## 闭包
## 跨域解决方案
## 性能优化
## cookie相关操作
## http 状态码
## 获取变量类型
## 正则
## eventloop 事件循环
## 缓存的认识
## 异步实现方案
## 什么是防抖和节流？有什么区别？如何实现？

### 防抖

触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。

思路：每次触发事件时都取消之前的延时调用方法。

```JavaScript
function debounce(fn) {
      let timeout = null; // 创建一个标记用来存放定时器的返回值
      return function () {
        clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
          fn.apply(this, arguments);
        }, 500);
      };
    }
    function sayHi() {
      console.log('防抖成功');
    }

    var inp = document.getElementById('inp');
    inp.addEventListener('input', debounce(sayHi)); // 防抖
```

### 节流

高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。

思路：每次触发事件时都判断当前是否有等待执行的延时函数。

```JavaScript
function throttle(fn) {
      let canRun = true; // 通过闭包保存一个标记
      return function () {
        if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
        canRun = false; // 立即设置为false
        setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
          fn.apply(this, arguments);
          // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
          canRun = true;
        }, 500);
      };
    }
    function sayHi(e) {
      console.log(e.target.innerWidth, e.target.innerHeight);
    }
    window.addEventListener('resize', throttle(sayHi));
```


---

# ES6

## 手写 promise

## Javascript异步编程的4种方法

- 回调函数
- 事件监听
- 发布/订阅(观察者模式)
- Promise对象

### 回调函数

异步编程的最基本方法。

优点：简单、容易部署与理解。

缺点：不利于代码维护与阅读，高度耦合，流程混乱，每个任务只能指定一个回调函数。

### 事件监听

事件驱动模式，任务的执行不取决于代码的顺序，而是取决于某个事件是否发生。

优点：是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"，有利于实现模块化。

缺点：整个程序都要变成事件驱动型，运行流程会变得很不清晰。

### 发布/订阅(观察者模式)

"事件"完全可以理解成"信号"。

假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"一个信号，其他任务可以向信号中心"订阅"这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"，又称"观察者模式"。

这种方法的性质与"事件监听"类似，但是明显优于后者。因为我们可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。

### Promise对象

Promises对象是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。简单说，它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。

这样写的优点在于，回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。它还有一个前面三种方法都没有的好处：如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个事件或信号。这种方法的缺点就是编写和理解，都相对比较难。


## 前端模块化有哪些？区别是啥？

---

# CSS

## 如何实现水平垂直居中
## 左侧固定，右侧不固定布局的实现方式
## rem 和 em 的区别
## rem 原理
- css3 动画
- 1像素边框
- 盒模型
- box-size

---

# webpack

---

# Git

---

# nodejs

---

# npm

---

# react

- 底层原理
- 路由配置
- redux
- key的用法、意义
- 子父组件传值
- 生命周期
- ~~state和props区别~~

# vue

- vue 和 react 区别
- 生命周期
- 双向数据绑定原理

# 浏览器

## url 地址输入后发生了什么（3次握手）
## DNS 劫持是什么
## http 劫持是什么
## http 和 https 区别是什么
## 浏览器缓存机制是什么

# jQuery

- 原理
- 原生和jQuery选择转换

# 小程序