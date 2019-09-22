# 声明
该题来自[这里](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/278)，这里是对该题进行练习为目的的探讨和研究。

<br/>




## 今日面试题

2019-09-17

> 反转链表，每 k 个节点反转一次，不足 k 就保持原有顺序(哔哩哔哩)

<br/>
1. 生成链表    
linkNode类包含两个属性，value存放节点的值，next存放指向下一个节点的链接。
2. 反转链表
即将原链表的next指针指向反转，`1->2->3->4->null`处理为`null<-1<-2<-3<-4`.
实现思路，从链表的首元素开始，将首元素后一个元素的next指向首元素，首元素指向null。。