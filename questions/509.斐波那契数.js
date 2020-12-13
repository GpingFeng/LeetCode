/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  // if (N === 1) {
  //   return 1
  // }
  // if (N === 0) {
  //   return 0
  // }
  // return fib(N-1) + fib(N-2)
  // 当 N 很大的时候，所需要的时间复杂度很是惊人

  // 斐波那契数列从 0 和 1 开始，那么这就是这个子问题的最底层
  // 通过数组来存储每一位所对应的斐波那契数列的值
  var arr = []
  arr[0] = 0
  arr[1] = 1
  for (let j = 2; j <= N; j++) {
    arr[j] = arr[j-1] + arr[j-2]
  }
  return arr[N]
};
// @lc code=end

