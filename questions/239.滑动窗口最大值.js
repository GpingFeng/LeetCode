/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let res = [];
  for (let i = k - 1; i < nums.length; i++) {
    let max = -Infinity;
    for (let j=i-k+1; j < i+1; j++) {
       max = Math.max(max, nums[j]);
    }
    res.push(max);
  }
  return res;
};
// @lc code=end

