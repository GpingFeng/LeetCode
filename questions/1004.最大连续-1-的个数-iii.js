/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  // 使用滑动窗口的方法解决：滑动窗口内最多有K个0，求滑动窗口最大的长度
  let count = 0; // 统计0的个数
  let left = 0; //滑动窗口区间左端点
  let right = 0; //滑动窗口区间右端点
  let res = 0; //最终结果
  // 区间为[left, right]
  while(right < A.length) {
    if (A[right] === 0) {
      count++;
    }
    while(count > K) { //当窗口内0的个数超过k时候，开始收缩窗口
      if (A[left] === 0) { //如果刚滑出窗口的元素是0，则count--;
        count--;
      }
      left++;
    }
    right++;
    //此时count<=K,保存窗口的最大宽度
    res = Math.max(res, right-left);
  }
  return res;
};
// @lc code=end

