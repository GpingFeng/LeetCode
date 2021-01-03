// 从小到大排序，即升序排序
function merge(arr) {
  // 设置递归的结束条件
  if (arr.length === 1 || !arr.length) {
    return arr;
  }
  // 将数组拆分为两部分
  let leftArr = arr.slice(0, arr.length / 2);
  let rightArr = arr.slice(arr.length / 2);
  return mergeSort(merge(leftArr), merge(rightArr));
}

// 将两个有序数组合并成一个有序的数组
function mergeSort(leftArr, rightArr) {
  let res = [];
  while(leftArr.length && rightArr.length) {
    // 在左侧的始终在左侧，所以是稳定的
    if (leftArr[0] <= rightArr[0]) {
      res.push(leftArr.shift());
    } else {
      res.push(rightArr.shift());
    }
  }
  res = leftArr.length ? res.concat(leftArr) :res.concat(rightArr);
  return res;
}

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// 时间复杂度为O(nlogn)
// 空间复杂度为O(n)
console.log(merge(arr));