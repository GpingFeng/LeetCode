/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let flag = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i-1] !== 1) {
      flag = 0;
    }
    if (nums[i] === 1) {
      flag++;
    }
    if (flag > max) { max = flag }
  }
  return max;
};
// @lc code=end

