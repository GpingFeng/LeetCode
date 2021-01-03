// 快速排序，升序
function quick(arr, left, right) {
  let index;
  // 递归结束条件
  if (arr.length > 1) {
    index = partition(arr, left, right);
    // 隐藏的递归结束条件
    if (left < index - 1) {
      quick(arr, left, index - 1);
    }
    if (right > index) {
      quick(arr, index, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  // 分区
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array) {
  return quick(array, 0, array.length - 1);
};

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// 时间复杂度为O(nlogn)
// 空间复杂度为O(n)
console.log(quickSort(arr));