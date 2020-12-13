/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  // 关键：找到最外层的起始位置
  let flag = 0, result = '', start = 0;
  for(let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      flag++;
    } else {
      // flag--;
      // 等于0，说明就是最外层的括号
      if (--flag === 0) {
        // console.log(start, i);
        result += S.substring(start + 1, i);
        // 设置下一个开始的起点
        start = i + 1;
      }
    }
  }
  return result;
};
// @lc code=end

