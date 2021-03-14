// O(n^2) T | O(1) S
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

array = [8, 5, 2, 9, 5, 6, 3];
const result = insertionSort(array);
console.log(result);

// Do not edit the line below.
exports.insertionSort = insertionSort;
