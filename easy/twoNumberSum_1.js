// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  // Write your code here.
  let numsTable = new Map();

  for (const element of array) {
    const complement = targetSum - element;
    const exists = numsTable.has(complement);
    if (exists) {
      return [element, complement];
    }
    numsTable.set(element, true);
  };

  return [];
}

//const result = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);

//console.log(result);

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;