// O(n) T | O(1) S
function findThreeLargestNumbers(array) {
  let threeLargest = [0, 0, 0];
  let lowestValue = Number.MAX_VALUE;

  // O(n)
  for (let number of array) {
    if (number < lowestValue) {
      lowestValue = number;
    }
  }

  // O(3n)
  for (let idx_1 = 2; idx_1 >= 0; --idx_1) {
    let largest = lowestValue;
    let largestIdx = 0;
    for (let idx_2 = 0; idx_2 < array.length; ++idx_2) {
      if (array[idx_2] > largest) {
        largestIdx = idx_2;
        largest = array[idx_2];
      }
    }
    array[largestIdx] = lowestValue;
    threeLargest[idx_1] = largest;
  }

  // Final O(3n + n) = O(4n) ~ O(n)

  return threeLargest;
}

array = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7];

const result = findThreeLargestNumbers(array);
console.log(result);

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
