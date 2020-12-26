/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    // 遍历两个链表，一直到链表尾部，即为 null 
    // 将链表A指向链表B头部，链表B指向链表A头部，重新遍历，第二次如果相交，即为交叉点。若没有，则不相交
    while (pB !== pA) { // 最后如果都没有相交，则同时为 null，结束
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
    }
    return pA;
};
// @lc code=end

