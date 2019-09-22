var LinkNode = /** @class */ (function () {
    function LinkNode(value) {
        this.value = value;
        this.next = null;
    }
    return LinkNode;
}());
/**
 * 根据给定长度生成链表
 * @param len // 生成链表的长度
 */
function getLink(len) {
    var i = 1;
    var currentNode = new LinkNode(1);
    var tmpNode = currentNode;
    while (i++ < len) {
        var newNode = new LinkNode(i);
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
function revertList(linkList, k) {
    var i = 0;
    var pre = null;
    var currentNode = linkList;
    while (i++ < k) {
        var nextTmpNode = currentNode.next;
        currentNode.next = pre;
        pre = currentNode;
        currentNode = nextTmpNode;
    }
    return {
        hasReverseNode: pre,
        newList: currentNode
    };
}
/**
 * 根据传入的链表以及反转的节点数，判断链表是否需要被反转，
 * 若链表节点数小于反转节点数则需要被不反转
 * @param linkList 需要被反转的原链表
 * @param k 需要反转的节点数
 * @returns boolean
 */
function isNeedRevert(linkList, k) {
    var i = 0;
    var tmpNode = linkList;
    while (tmpNode !== null && i++ < k - 1) {
        tmpNode = tmpNode.next;
    }
    return i === k;
}
function getReverseLink() {
    var linkList = getLink(8);
    // 存放反转后的链表，用于输出
    // let revertListArr: Array < ListItem > = [];
    var newList = JSON.parse(JSON.stringify(linkList));
    while (isNeedRevert(newList, 3)) {
        var revertListObj = revertList(newList, 3);
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
//# sourceMappingURL=138.js.map