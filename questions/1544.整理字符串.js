/*
 * @lc app=leetcode.cn id=1544 lang=javascript
 *
 * [1544] 整理字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  if (s.length < 2) return s;
  let res = [''];
  for (let i=0; i < s.length; i++) {
    let top = res[res.length-1];
    if (s[i] !== top && top.toLowerCase() === s[i].toLowerCase()) {
      res.pop();
    } else {
      res.push(s[i]);
    }
  }
  return res.join('');
};
// @lc code=end

