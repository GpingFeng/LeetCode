/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  // 经典使用快慢节点的方式解决
  let fast = head;
  let slow = head;
  while(fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // 结尾的时候有可能刚好没值，也有可能是跨过一个才没值fast.next.next
  return fast.next ? slow.next : slow;
};
// @lc code=end

