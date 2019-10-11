/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //  遍历 nums 数组
    //  用target 减去当前项，看另一个项有没有在数组中，而且不等于自身
    //  如果存在另一个项，取得当前项和另一个项的下标，返回结果
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let otherIndex = nums.indexOf(target - nums[i])
        if (otherIndex !== -1 && otherIndex !== i) {
            result = [i, otherIndex]
            break
        }
    }
    return result
};
// @lc code=end

