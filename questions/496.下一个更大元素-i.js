/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  // 单调栈
  // 先构造一个哈希表，存储 num2 的每一个元素的下一个比它大的值
  // 构造一个中间栈
  let stack = [];
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    while(stack[stack.length - 1] < nums2[i] && stack.length) {
      map.set(stack[stack.length - 1], nums2[i]);
      stack.pop();
    }
    stack.push(nums2[i]);
  }
  return nums1.map(item => map.get(item) || -1);
};
// @lc code=end

