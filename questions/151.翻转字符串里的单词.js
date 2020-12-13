/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 使用字符串方法，match 匹配单词 = 数组
// var reverseWords = function(s) {
//   return s.match(/(\w+)/g).reverse().join(' ')
// };
// 使用队列的方式
// 先排除掉两端的空字符
// 从左到右，取到一个个的单词，并依次排到队列前面，即 unshift 进队列中
// 再使用空格拼接
// 留意一个知识点 !!' ' === true 和 !!'' ===false
// 另外，可以使用 charAt 根据下标找到字符串
var reverseWords = function(s) {
  let left = 0;
  let right = s.length - 1;
  let result = [];
  // 去掉前后空格
  while(s[left] === ' ') { left++ }
  while(s[right] === ' ') { right-- }

  // 单词
  let world = '';
  while(left <= right) {
    if (s[left] === ' ' && !!world) {
      result.unshift(world);
      world = '';
    } else if (s[left] !== ' ') {
      world = world + s[left];
    }
    left++;
  }
  result.unshift(world);
  return result.join(' ');
};
// @lc code=end

