/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// var threeSum = function(nums) {
//   // 可以先排序
//   // 如果数量小于3，直接返回
//   // 定一个目标值 i，假如 i > 0，则结束
//   // 然后两个指针 left 和 right 指向剩余数组两端
//   // 往中间夹紧，假如 i + left + right 相加为 0，则取出
//   // 注意：为了去重，跳过跟之前相同的选项
//   let result = [];
//   let len = nums.length;
//   if (len < 3) return result;
//   nums.sort((a, b) => a - b);
//   // 留意这里的n-2
//   for (let i = 0; i < len - 2; i++) {
//     let first = nums[i];
//     // 避免第一项重复
//     if (i !== 0 && nums[i] === nums[i-1]) {
//       continue;
//     }
//     if (first > 0) { break }
//     let left = i + 1;
//     let right = len - 1;
//     while(left < right) {
//       let sum = nums[i] + nums[left] + nums[right];
//       if (sum === 0) {
//         result.push([nums[i], nums[left++], nums[right--]])
//         // 如果接下来是重复的项，就去掉，记得是 while
//         while (nums[left] === nums[left-1]) {
//           left++;
//         }
//         while (nums[right] === nums[right+1]) {
//           right--;
//         }
//       } else if (sum < 0) {
//         left++
//       } else if (sum > 0) {
//         right--;
//       }
//     }
//   }
//   return result;
// }

// set
// var threeSum = function(nums) {
//   // 将三数之和转换为两数之和
//   // 这种方式会导致超时
//   let set = new Set();
//   let result = [];
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     while (nums[i] === nums[i-1]) {
//       i++;
//     }
//     let first = nums[i];
//     // let set = new Set();
//     for (j = i + 1; j < nums.length; ) {
//       const second = 0 - nums[j] - first;
//       const third = nums[j];
//       if (!set.has(second)) {
//         set.add(third)
//         j++
//       } else {
//         result.push([first, second, third]);
//         set.add(third);
//         j++
//         // 去重
//         while (nums[j] === nums[j-1]) { j++ }
//       }
//     }
//     // 结束内层之后，要重置一下 set
//     set = new Set()
//   }
//   return result;
// };

// map
var threeSum = function(nums) {
  // 将三数之和转换为两数之和
  // 这种方式会导致超时
  let map = new Map();
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    
    while (i && nums[i] === nums[i-1]) {
      i++;
    }
    let first = nums[i];
    // let map = new Map();
    for (j = i + 1; j < nums.length; ) {
      const second = 0 - nums[j] - first;
      const third = nums[j];
      if (!map.has(second)) {
        map.set(third, third)
        j++;
      } else {
        result.push([first, second, third]);
        map.set(third, third);
        j++;
        // 去重
        while (nums[j] === nums[j-1]) { j++ }
      }
      
    }
    // 结束内层之后，要重置一下 map
    map = new Map()
  }
  return result;
};
// @lc code=end

