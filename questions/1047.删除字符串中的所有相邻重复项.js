/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let res = [];
  for (let i = 0; i < S.length; i++) {
    if (res.length === 0 || res[res.length-1] !== S[i]) {
      res.push(S[i]);
    } else {
      res.pop();
    }
  }
  return res.join('');
};
// @lc code=end

