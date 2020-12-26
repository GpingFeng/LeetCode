/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//   let arr = [];
//   let res = true;
//   while(head) {
//     arr.push(head.val);
//     head = head.next;
//   }

//   for (let i = 0; i < arr.length / 2; i++) {
//     if (arr[i] !== arr[arr.length - i - 1]) {
//       res = false;
//       break
//     }
//   }
//   return res;
// };

var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  let fast = head;
  let slow = head;
  // 找到前半部分链表的尾节点。
  while(fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  slow.next = reverseList(slow.next);
  slow = slow.next;
  while(slow) {
    console.log(head.val, slow.val)
    if (head.val !== slow.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }
  return true;
};

function reverseList(head) {
  if (!head || !head.next) return head;
  // 反转后半部分链表
  let prev = null;
  let cur = head;
  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next];
  }
  return prev;
}
// @lc code=end

