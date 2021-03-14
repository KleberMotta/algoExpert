function bubbleSort(array) {
  let swaped = true;
  let counter = 0;
  while (swaped) {
    swaped = false;
    for (let idx = 0; idx + 1 < array.length - counter; idx++) {
      if (array[idx] > array[idx + 1]) {
        const tmp = array[idx];
        array[idx] = array[idx + 1];
        array[idx + 1] = tmp;
        swaped = true;
      }
    }
    counter++;
  }
}

array = [-8, 5, 2, -9, 5, 6, 3];
bubbleSort(array);
console.log(array);

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
