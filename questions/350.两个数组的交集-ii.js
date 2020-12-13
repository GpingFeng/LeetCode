/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 解法一：forEach + indexOf + splice
// var intersect = function(nums1, nums2) {
//   let result = []
//   nums1.forEach(item => {
//     let findIndex = nums2.indexOf(item);
//     if (findIndex !== -1) {
//       result.push(nums2.splice(findIndex, 1))
//     }
//   })
//   return result;
// };

// 解决二：头指针方法
// var intersect = function(nums1, nums2) {
//   // 先排序
//   // 利用两个头指针指向初始值
//   // 如果两个头指针相等，则都往后移，否则小的往后移
//   // 超出其中一个的长度，则结束
//   nums1.sort((a, b) => a-b);
//   nums2.sort((a, b) => a-b);
//   let index1 = 0, index2 = 0;
//   let result = [];
//   while(index1 < nums1.length && index2 < nums2.length) {
//     let item1 = nums1[index1];
//     let item2 = nums2[index2];
//     if (item1 === item2) {
//       result.push(item1);
//       index1++;
//       index2++;
//     } else if (item1 > item2) {
//       index2++;
//     } else {
//       index1++;
//     }
//   }
//   return result;
// };

// 解法三：map 结构
var intersect = function(nums1, nums2) {
  // 将其中一个存到 map 结构中，值为该值的数量
  // 遍历另外一个数组，如果存在，则取出，并值-1
  let map = new Map();
  let result = [];
  nums1.forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  })
  nums2.forEach(item => {
    if (map.has(item) && map.get(item)) {
      result.push(item);
      map.set(item, map.get(item) - 1);
    }
  })
  return result;
};
// @lc code=end

