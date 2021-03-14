// O(log(n)) T | O(1) S
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = array[middle];
    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

const result = binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73)
console.log(result);

// Do not edit the line below.
exports.binarySearch = binarySearch;
