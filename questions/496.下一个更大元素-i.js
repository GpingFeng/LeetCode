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
  // for (let i = 0; i < nums1.length; i++) {
  //   if (nums2[nums2.indexOf(nums1[i]) + 1] > nums1[i]) {
  //     return nums2[nums2.indexOf(nums1[i]) + 1]
  //   } else {
  //     return -1;
  //   }
  // }
  return nums1.map((item) => {
    let target = nums2.indexOf(item);
    if (target === -1) { return -1 }
    while(item > nums2[++target]) {}
    if (target >= nums2.length) {
      target = -1;
    } else {
      target = nums2[target];
    }
    return target;
  })
};
// @lc code=end

