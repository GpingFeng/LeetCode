/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  // 特殊情况，0,1,2是固定的
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  if (rowIndex === 2) return [1, 2, 1];
  // 输出一个二维数组
  let res = [[1], [1, 1]];
  for (let i = 2; i < rowIndex + 1; i++) {
      // 其他是前后都是1
      let item = [1];
      // 在杨辉三角中，每个数是它左上方和右上方的数的和
      for (let j = 0; j < (res[i-1].length - 1); j++) {
          item.push((res[i-1][j+1] + res[i-1][j]));
      }
      item.push(1);
      res.push(item);
  }
  return res.pop();
};
// @lc code=end

