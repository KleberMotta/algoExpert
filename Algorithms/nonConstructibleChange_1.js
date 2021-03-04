// n(n log(n)) t | O(1) s
function nonConstructibleChange(coins) {
  // Write your code here.
  let possibleChange = 0;
  coins.sort((a, b) => a - b);

  for (i = 0; i < coins.length; i++) {

    if (coins[i] > possibleChange + 1) {
      return possibleChange + 1;
    }
    possibleChange += coins[i];
  }

  return possibleChange + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

const result = nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
console.log(result);

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
