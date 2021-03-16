// O(n^2) T | O(K) - n is the size on the input array, and K is the number of integers in the result array
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let tripletsArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    let currentNumber = array[i];
    let startLeftPointer = i + 1;
    let startRightPointer = array.length - 1;

    let currentLeftPointer = startLeftPointer;
    let currentRightPointer = startRightPointer;

    while (currentLeftPointer < startRightPointer) {
      let leftNumber = array[currentLeftPointer];
      let rightNumber = array[currentRightPointer];

      if (currentNumber + leftNumber + rightNumber === targetSum) {
        tripletsArray.push([currentNumber, leftNumber, rightNumber]);
      }

      if (currentRightPointer > currentLeftPointer + 1) {
        currentRightPointer--;
      } else {
        currentRightPointer = startRightPointer;
        currentLeftPointer++;
      }

    }
  }

  return tripletsArray.length > 0 ? tripletsArray : [];
}

const result = threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
console.log(result);

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
