/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < ops.length; i++) {
    const len = result.length;
    switch (ops[i]) {
      case '+': 
        result[len] = Number(result[len-1]) + Number(result[len-2]);
        break;
      case 'D':
        result[len] = result[len-1] * 2;
        break;
      case 'C':
        result.pop();
        break;
      default:
        result.push(ops[i]);
    }
  }
  result.reduce((pre, cur, index, arr) => {
    return sum += Number(cur);
  }, 0)
  return sum;
};
// @lc code=end

