/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 利用滑动窗口
  // 维护一个数组——滑动窗口
  // 遍历判断字符串在不在滑动窗口中
  // 不在则 push 进数组
  // TODO:关键：在则删除滑动窗口数组中相同的字符以及相同字符前的字符，然后将当前字符 push 进数组
  // 然后将 max 更新为当前最长子串的长度
  let arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let findIndex = arr.indexOf(s[i]);
    if (findIndex !== -1) {
      arr.splice(0, findIndex + 1);
    }
    arr.push(s.charAt(i));
    max = Math.max(max, arr.length);
  }
  return max;
};
// @lc code=end

