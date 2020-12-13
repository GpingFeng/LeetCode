/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n){
//   // 两个数组最大的相互比较，较大的放到 nums1 数组后面
//   // 只要其中一个结束，就将另一个全部放到 nums1 数组前面
//   let allLen = nums1.length;
//   while(m && n) {
//     if (nums1[m-1] >= nums2[n-1]) {
//       nums1[--allLen] = (nums1[--m]);
//     } else {
//       nums1[--allLen] = (nums2[--n]);
//     }
//   }
//   while(n > 0) {
//     nums1[--allLen] = nums2[--n];
//   }
//   // if (n) {
//   //   nums1.splice(0, n, ...nums2.splice(0, n));
//   // }
// }

// 解决二：https://leetcode-cn.com/problems/merge-sorted-array/solution/tu-jie-he-bing-liang-ge-you-xu-shu-zu-by-user7746o/
// var merge = function(nums1, m, nums2, n) {
//   let length = m + n
//   while(n > 0) {
  // 关键是这里的不同
//       if(m <= 0) {
//           nums1[--length] = nums2[--n]
//           continue
//       }
//       nums1[--length] = nums1[m-1] >= nums2[n-1] ? nums1[--m]: nums2[--n]
//   }
// };

// 解法三
// 将 nums2 数组赋值给 nums1 数组后面，重新排序
var merge = function(nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m+i] = nums2[i];
  }
  nums1.sort((a, b) => a-b);
}

// sort 函数
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

