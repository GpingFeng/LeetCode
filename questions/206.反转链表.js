/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// var reverseList = function(head) {
//   // 使用迭代法解决
//   // 如果链表为空或者只有一个项，则直接返回不需要反转
//   if (head === null || head.next === null) {
//     return head
//   }

//   let p = head.next
//   // 让原本的 head 变成尾结点
//   head.next = null
//   let temp
//   // 迭代
//   while(p !== null) {
//     temp = p.next
//     p.next = head
//     head = p
//     p = temp
//   }

//   return head
// };

const reverseList = function(head) {
  let q = null;
  return r(head, q);
}
const r = function(p, q) {
  if (p === null) {
      return q;
  } else {
      return r(p.next, { val: p.val, next: q });
  }
}
// @lc code=end

