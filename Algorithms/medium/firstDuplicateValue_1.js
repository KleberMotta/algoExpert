function firstDuplicateValue(array) {
  let minimumIndex = -1;
  let mapIdxValue = {};
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] in mapIdxValue)) {
      mapIdxValue[array[i]] = i;
    } else {
      minimumIndex = mapIdxValue[array[i]];
      break;
    }
  }
  return minimumIndex !== -1 ? array[minimumIndex] : -1;
}

const result = firstDuplicateValue([2, 1, 5, 3, 3, 2, 4]);
console.log(result);

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;
