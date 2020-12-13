/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    // 记录每个点通过的数量，从1开始
    let addMap = {}
    // 记录每个挡板通过的数量
    let endMap = {}
    for (let i = 0; i < bookings.length; i++) {
      let [start, end, tickets] = bookings[i]
      addMap[start] = !addMap[start]? tickets : addMap[start] + tickets
      endMap[end] = !endMap[end]? tickets : endMap[end] + tickets
    }
    // console.log('addMap:', addMap, endMap)
    let sum = 0;
    let result = []
    for (let j = 0; j < n; j++) {
      sum += addMap[j+1] || 0
      result[j] = sum
      sum -= endMap[j+1] || 0
    }
    return result
};
// @lc code=end

