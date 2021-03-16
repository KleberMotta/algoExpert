// O(n) T | O(1) S
function moveElementToEnd(array, toMove) {
  let lastPointer = array.length - 1;
  for (let i = 0; i < lastPointer; i++) {
    while (i < lastPointer && array[lastPointer] === toMove) {
      lastPointer--;
    }
    if (array[i] === toMove) {
      swap(i, lastPointer, array);
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

const result = moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);
console.log(result);

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
