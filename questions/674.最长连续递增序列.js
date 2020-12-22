/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  // 贪心算法，类似股票最大收益的
  if (nums.length === 0) {return 0;}
  let sum = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i-1]) {
      count++;
    } else {
      count = 1;
    }
    if (count > sum) { sum = count; }
  }
  return sum;
};
// @lc code=end

