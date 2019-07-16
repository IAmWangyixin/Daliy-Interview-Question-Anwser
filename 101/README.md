# 声明
该题来自[这里](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/158)，这里是对该题进行练习为目的的探讨和研究。

<br/>




## 今日面试题

2019-07-09

> 第 101 题：修改以下 print 函数，使之输出 0 到 99，或者 99 到 0
>
> 要求：
>
> 1、只能修改 `setTimeout` 到 `Math.floor(Math.random() * 1000` 的代码
>
> 2、不能修改 `Math.floor(Math.random() * 1000`
>
> 3、不能使用全局变量
>
> ```js
> function print(n){
>   setTimeout(() => {
>     console.log(n);
>   }, Math.floor(Math.random() * 1000));
> }
> for(var i = 0; i < 100; i++){
>   print(i);
> }
> ```



公司：头条

<br/>

# 基于实践的理解
## 题目在表达什么
1. 按照题目写法，输出是：随机输出0-100。
2. 要求输出是：按序输出；
3. 考点是`Event Loop`，确切的说是考如何改变`setTimeout`中函数的执行顺序；

## 解题
这道题应该难在悟到考点吧（可能是我太菜），我一来就理解偏了，以为在考`setTimeout`的`this`。。。好了，言归正传。既然知道了是考`Event Loop`,那么我们继续剖析问题。
### 为什么
因为`setTimeout`中指定的代码会放到任务队列中（即被移出此次执行），直到到了指定的时间或者指定时间之后才会执行。所以，题目会输出乱序的0-100.
### 怎么做
如何能让`setTimeout`中的指定代码按序执行（即可顺序输出0-100）。
1. 立即执行（demo line:24-34）
    - 使用立即执行函数，让代码立即执行
    - 使用`call`和`apply`让函数立即执行
2. 指定一个固定的`delay`(demo line:18-22)

## 你可能想找的资料
- [Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)