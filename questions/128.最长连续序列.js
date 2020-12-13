/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let maxNum = 0;
    nums.sort((a,b) => a-b);
    // nums = [...nums]
    let tempMax = 1;
    if (nums.length === 1) {
      return 1
    }
    console.log(nums)
    for (let i=1; i < nums.length; i++) {
      if (nums[i]-1 === nums[i-1]) {
        tempMax++
      } else if (nums[i] === nums[i-1]) {
        maxNum = Math.max(maxNum, tempMax)
        continue
      } else {
        tempMax = 1
      }
      maxNum = Math.max(maxNum, tempMax)
    }
    return maxNum
};
// @lc code=end

