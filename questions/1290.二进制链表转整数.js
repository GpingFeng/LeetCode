/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
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
 * @return {number}
 */
// var getDecimalValue = function(head) {
//   // 反转一次链表
//   let prev = null;
//   let cur = head;
//   while(cur) {
//     [prev, cur.next, cur] = [cur, prev, cur.next]
//   }
//   let i = 0;
//   let sum = 0;
//   while(prev) {
//     if (prev.val) {
//       // 有值的时候进行二进制指数运算
//       sum += Math.pow(2, i);
//     }
//     prev = prev.next;
//     i++;
//   }
//   return sum;
// };

var getDecimalValue = function(head) {
  let sum = 0;
  while(head) {
    sum = sum * 2 + head.val;
    head = head.next;
  }
  return sum;
};
// @lc code=end

