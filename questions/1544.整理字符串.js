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
  let res = [];
  for (let i=0; i < s.length; i++) {
    console.log(/[A-Z]/.test(s[i]) && /[a-z]/.test(res[res.length-1]) && s[i].toLowerCase() === res[res.length-1], /[a-z]/.test(s[i]) && /[A-Z]/.test(res[res.length-1]) && res[res.length-1].toLowerCase() === s[i])
    if (/[A-Z]/.test(s[i]) && /[a-z]/.test(res[res.length-1]) && s[i].toLowerCase() === res[res.length-1]) {
      // i++;
      res.pop();
    } else if (/[a-z]/.test(s[i]) && /[A-Z]/.test(res[res.length-1]) && res[res.length-1].toLowerCase() === s[i]) {
      // i++;
      res.pop();
    } else {
      res.push(s[i]);
    }
  }
  return res.join('');
};
// @lc code=end

