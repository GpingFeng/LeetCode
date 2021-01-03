function selectSort(arr) {
  // 遍历，选择每次最小的放在前面
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 应该以下标
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// 时间复杂度为O(n^2)，两次遍历
// 空间复杂度为O(1)，不需要额外的空间
console.log(selectSort(arr));
