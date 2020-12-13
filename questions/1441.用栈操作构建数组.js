/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  let res = [];
  for (let i = 0; i < target[target.length-1]; i++) {
    res.push('Push');
    if (target.indexOf(i + 1) === -1) {
      res.push('Pop');
    }
  }
  return res;
};
// @lc code=end

