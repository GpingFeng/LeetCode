/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

//  参考：https://blog.csdn.net/afei__/article/details/83214042
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length;
    // 记录最长回文子串最长长度
    let maxLen = 1;
    let start = 0;
    let lps = []
    // 先初始化一个二维数组
    for (let i = 0; i < len; i++) {
        lps[i] = []
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            // 子字符串长度小于 2 的时候，单独处理
            if (i - j < 2) {
                lps[j][i] = s[i] === s[j];
            } else {
                // 如果 [j, i]是回文子串，那么[j+1, i-1]也一定是回文子串
                lps[j][i] = lps[j+1][i-1] && s[i] === s[j]
            }

            if (lps[j][i] && (i-j+1) > maxLen) {{
                maxLen = i - j + 1;
                start = j;
            }}
        }
    }

    return s.substring(start, start + maxLen)
};
// @lc code=end

