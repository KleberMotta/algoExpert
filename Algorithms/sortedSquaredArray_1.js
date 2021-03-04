// O(n log(n)) t | O(n) s
function sortedSquaredArray(array) {
  // Write your code here.
  for (i = 0; i < array.length; i++)
    array[i] = array[i] * array[i];
  return array.sort((a, b) => a - b);;
}

const result = sortedSquaredArray([-8, -6, 1, 2, 3, 5, 6, 9]);
console.log(result);

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
