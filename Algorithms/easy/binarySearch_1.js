const findIdx = (left, right) => {
  return Math.floor((right - left) / 2);
}

// O(log(n)) T | O(1) S
function binarySearch(array, target) {

  let leftPointer = 0;
  let rightPointer = array.length - 1;

  let idx = findIdx(leftPointer, rightPointer);

  while (rightPointer >= leftPointer) {
    if (array[idx] == target) {
      return idx
    }
    else if (target > array[idx]) {
      leftPointer = idx + 1;
      idx = leftPointer + findIdx(leftPointer, rightPointer);
    } else if (target < array[idx]) {
      rightPointer = idx - 1;
      idx = rightPointer - findIdx(leftPointer, rightPointer);
    }
  }
  return -1;
}

const result = binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 70)
console.log(result);

// Do not edit the line below.
exports.binarySearch = binarySearch;
