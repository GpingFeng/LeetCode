/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  // 第i步的花费 db[i] = d[i-1] + cost[i] 或者 d[i-2] + cost[i]
  let db = new Array(cost.length);
  db[0] = cost[0];
  db[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    db[i] = cost[i] + Math.min(db[i-1], db[i-2]);
  }
  // 最后有可能是两步也有可能是一步
  return Math.min(db[cost.length-2], db[cost.length-1]);
};
// @lc code=end

