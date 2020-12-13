/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 由题目可以发掘我们可以利用栈的先进后出特性来解决这个问题
    // 定义一个常量记录括号的信息
    // const mapBrackets = {
    //   '(': -1,
    //   ')': 1,
    //   '{': -2,
    //   '}': 2,
    //   '[': -3,
    //   ']': 3
    // }
    // let stack = []
    // for (let i = 0; i < s.length; i++) {
    //   let cur = mapBrackets[s[i]]
    //   if (cur < 0) {
    //     stack.push(cur)
    //   } else {
    //     if (cur + stack.pop() !== 0) {
    //       return false
    //     }
    //   }
    // }
    // if (stack.length > 0) {
    //   return false
    // }
    // return true


    // 别人的高效解法
    var st = []
    for(var l of s)
        if ((i="({[]})".indexOf(l))>-1)
            if (st[st.length-1]+i===5)
                st.length--;
            else
                st.push(i);
    return st.length===0
};
// @lc code=end

