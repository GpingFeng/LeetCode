/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
var hasCycle = function(head) {
    // 遍历所有节点，每次遍历到一个节点时，判断该节点此前是否被访问过。
    // let map = new Map();
    // while (head !== null) {
    //   // 判断该节点此前是否被访问过
    //   if (map.has(head)) {
    //     return true;
    //   }
    //   map.set(head, true);
    //   head = head.next;
    // }
    // return false;
    if (head === null || head.next === null || head.next.next === null) { return false; }

    // 快慢指针
    let fast = head.next.next;
    let slow = head.next;
    while (fast !== slow) {
      if (fast.next === null || fast.next.next === null) {
        return false;
      }
      fast = fast.next.next;
      slow = slow.next;
    }
    return true;

};
// @lc code=end

