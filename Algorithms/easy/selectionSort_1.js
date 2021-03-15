// O(n^2) T | O(1) S
function selectionSort(array) {
  let smallerIdx = 0;
  let idxOffSet = 0;
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    let smaller = Number.MAX_VALUE;
    for (let idx = idxOffSet; idx < array.length; idx++) {
      if (array[idx] < smaller) {
        smaller = array[idx];
        smallerIdx = idx;
        isSorted = false;
      }
    }
    if (!isSorted) swap(idxOffSet, smallerIdx, array);
    idxOffSet++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const result = selectionSort([8, 5, 2, 9, 5, 6, 3]);
console.log(result);


// Do not edit the line below.
exports.selectionSort = selectionSort;
