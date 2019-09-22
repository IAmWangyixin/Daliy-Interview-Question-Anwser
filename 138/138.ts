interface ListItem {
    next: ListItem | null;
    value: number;
}
interface revertListObj {
    hasReverseNode: ListItem,
    newList: ListItem
}

class LinkNode {
    value: number;
    next: null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}
/**
 * 根据给定长度生成链表
 * @param len // 生成链表的长度
 */
function getLink(len: number) {
    let i: number = 1;
    var currentNode: ListItem = new LinkNode(1);
    var tmpNode = currentNode;
    while (i++ < len) {
        var newNode: ListItem = new LinkNode(i);
        tmpNode.next = newNode;
        tmpNode = newNode;
    }
    return currentNode;
}
/**
 * //反转指定节点的链表
 * @param linkList 需要被反转的原链表
 * @param k 需要反转的节点数
 */
function revertList(linkList: ListItem, k: number) {
    let i: number = 0;
    let pre: null | ListItem = null;
    let currentNode = JSON.parse(JSON.stringify(linkList));
    while (i++ < k) {
        let nextTmpNode: ListItem = currentNode.next;
        currentNode.next = pre;
        pre = currentNode;
        currentNode = nextTmpNode;
    }
    return {
        hasReverseNode: pre,
        newList: currentNode
    }
}

/**
 * 根据传入的链表以及反转的节点数，判断链表是否需要被反转，
 * 若链表节点数小于反转节点数则需要被不反转
 * @param linkList 需要被反转的原链表
 * @param k 需要反转的节点数
 * @returns boolean
 */
function isNeedRevert(linkList: ListItem, k: number) {
    let i: number = 0;
    var tmpNode = JSON.parse(JSON.stringify(linkList));
    while (tmpNode !== null && i++ < k - 1) {
        tmpNode = tmpNode.next;
    }
    return i === k;
}

function getReverseLink() {
    let linkList: ListItem = getLink(8);
    // 存放反转后的链表，用于输出
    // let revertListArr: Array < ListItem > = [];
    let newList:ListItem = JSON.parse(JSON.stringify(linkList));
    while (isNeedRevert(newList, 3)) {
        let revertListObj: revertListObj = revertList(newList, 3);
        newList = revertListObj.newList;
        // revertListArr.push(revertListObj.hasReverseNode);
        console.log(revertListObj.hasReverseNode);
    }
    if (newList !== null) {
        // revertListArr.push(linkList);
        console.log(newList);
    }
}

getReverseLink();