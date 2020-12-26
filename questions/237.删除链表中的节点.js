/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // 先将现有节点等于后一个节点
  // 再将现有节点指向后一个节点的后一个节点，绕过去
  node.val = node.next.val;
  node.next = node.next.next;
};
// @lc code=end

