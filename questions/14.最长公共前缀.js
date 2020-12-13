/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 根据第一个项目作为一个对照项，并从下标0开始
  // 假如后面每一个 every，都 startsWith，则继续。否则返回对照项下标
  // 下标 index 为0，则为 '', 否则，为前 index-1 个字符串
  let index = 0;
  let str = '';
  if (!strs[0]) {
    return '';
  }
  if ([...new Set(strs)].length === 1) {
    return strs[0];
  }
  for (var i = 0; i < strs[0].length; i++) {
    str+=strs[0][i];
    let allMatch = strs.every(item => item.startsWith(str));
    if (!allMatch) {
      break;
    }
  }
  if (i === 0) {
    return '';
  } else {
    return str.substr(0, i)
  }
};
// @lc code=end

