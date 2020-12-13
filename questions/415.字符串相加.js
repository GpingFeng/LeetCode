/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  // 两个字符串的长度
  // 分别从尾部开始首部移动
  // 计算尾部的值 + temp【上一次进位】，假如超过十，则进位 temp= 1，否则为0
  // 将结果放在字符串首部
  let aLen = num1.length;
  let bLen = num2.length;
  let temp = 0;
  let result = '';
  while(aLen || bLen) {
    let item1 = aLen? num1[--aLen] : '';
    let item2 = bLen? num2[--bLen] : '';
    let sum = Number(item1) + Number(item2) + temp;
    if (sum > 9) {
      result = `${sum % 10}${result}`
      temp = 1;
    } else {
      result = `${sum}${result}`
      temp = 0;
    }
  }
  if (temp) {
    result = `${temp}${result}`
  }
  return result;
};
// @lc code=end

