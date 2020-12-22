/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 贪心算法
    let sum = 0;
    for (let i = 1; i < prices.length; i++) {
      // 贪心的角度考虑我们每次选择贡献大于 00 的区间即能使得答案最大化
      if (prices[i] - prices[i-1] > 0) {
        sum += prices[i] - prices[i-1];
      }
    }
    return sum;
};
// @lc code=end

