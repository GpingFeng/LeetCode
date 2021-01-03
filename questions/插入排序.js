function insertSort(arr) {
  // 前面都是排序好的数组，后面的找到合适的位置插入
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i]; // 待插入的元素
    let preIndex = i - 1; // 指向前一个元素的下标
    // 寻找合适的插入位置
    while (preIndex >= 0 && cur < arr[preIndex]) {
      arr[preIndex+1] = arr[preIndex];
      preIndex--;
    }
    // 插入到前一个元素的后一个
    arr[preIndex + 1] = cur;
  }
  return arr;
}

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// 时间复杂度为O(n^2)，两次遍历
// 空间复杂度为O(1)，不需要额外的空间
console.log(insertSort(arr));
