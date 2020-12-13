/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let s = [], t = [];
    let len = S.length > T.length ? S.length : T.length;
    for (let i = 0; i < len; i++) {
      if (S[i] === '#') {
        s.pop();
      } else if (S[i]) {
        s.push(S[i]);
      }
      if (T[i] === '#') {
        t.pop();
      } else if (T[i]) {
        t.push(T[i]);
      }
    }
    return t.join() === s.join();
};
// @lc code=end

