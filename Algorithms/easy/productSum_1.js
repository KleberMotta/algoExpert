
// O(K) T | O(D) S - where K is the total of integers inside the "special" array
// D is greatest depth of of "special" arrays in the array
function productSum(array, depth = 1) {
  let sum = 0;
  for (const element of array) {
    if (!Array.isArray(element)) {
      sum += element;
    } else {
      sum += productSum(element, depth + 1);
    }
  }
  return sum * depth;
}

const result = productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
console.log(result);

// Do not edit the line below.
exports.productSum = productSum;
