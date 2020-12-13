/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  let res = 0;
  for(let i=0; i < logs.length; i++) {
    if (logs[i] === '../' && res !== 0) {
      res--;
    } else if(logs[i] !== './' && logs[i] !== '../') {
      res++;
    }
  }
  return res;
};
// @lc code=end

