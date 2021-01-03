function bubbleSort(arr) {
  // 遍历，将最大的排到最上面
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      }
    }
  }
  return arr;
}

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// 时间复杂度为O(n^2)，两次遍历
// 空间复杂度为O(1)，不需要额外的空间
console.log(bubbleSort(arr));
