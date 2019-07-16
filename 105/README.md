# 声明
该题来自[这里](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/177)，这里是对该题进行练习为目的的探讨和研究。

<br/>




## 今日面试题

2019-07-09

> url有三种情况
```
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33
```
> 匹配elective后的数字输出（写出你认为的最优解法）
`[] || ['800'] || ['800','700']`
公司：阿里

<br/>

# 考点
正则后行断言

## 断言
- 先行断言：`x(?=y)`匹配`x`仅当`x`后面跟着`y`
- 后行断言： `(?<=y)x`匹配`x`仅当`x`前面跟着`y`

## 你可能想找的资料
- [正则断言]（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions）
