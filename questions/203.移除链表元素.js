/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // 遍历找到相应的节点，使前一个节点指向当前节点的后一个节点
  // 但是如果是第一个的话，情况就不是这样了，这个时候可以设置一个哨兵节点
  // 可以通过哨兵节点去解决它，哨兵节点广泛应用于树和链表中，如伪头、伪尾、标记等，它们是纯功能的，通常不保存任何数据，其主要目的是使链表标准化，如使链表永不为空、永不无头、简化插入和删除。
  // 设置一个哨兵节点
  let sentinel = new ListNode(0);
  // sentinel.next 指向 head
  sentinel.next = head;
  let cur = head;
  let prev = sentinel;
  while(cur !== null) {
    if (cur.val === val) {
      prev.next = cur.next; // 相等则删除
    } else {
      prev = cur; // 不相等
    }
    cur = cur.next;
  }
  // 最后直接返回sentinel.next，即原本指向 head 的
  return sentinel.next;
};
// @lc code=end

