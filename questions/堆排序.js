function heapSort(arr) {
  let heapSize = arr.length;
  buildHeap(arr);
  while(heapSize > 1) {
    heapSize--;
    swap(arr, 0, heapSize);
    heapify(arr, heapSize, 0);
  }
  return arr;
}

function buildHeap(arr) {
  let heapSize = arr.length;
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, heapSize, i);
  }
}

function heapify(arr, heapSize, i) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;
  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, heapSize, largest);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(heapSort(arr));