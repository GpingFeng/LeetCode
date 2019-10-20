/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 先对现有的硬币进行排序
    coins = coins.sort((a, b) => a - b);
    // 使用 countArray[key] 记录多少钱使用多少种最少，其中key值为多少钱
    countArray = new Array(amount+1).fill(amount+1);
    // 当钱为 0 的时候零钱也为0
    countArray[0] = 0;
    let count = 0;
    
    for (let c = 0; c <= amount; c++) {
        for (let i = 0; i < coins.length; i++) {
            count++;
            if (c >= coins[i]) {
                // 重点
                countArray[c] = Math.min(countArray[c], countArray[c-coins[i]]+1)
            } else {
                break;
            }
        }
    }

    return countArray[amount] <= amount? countArray[amount]: -1;
};
// @lc code=end

