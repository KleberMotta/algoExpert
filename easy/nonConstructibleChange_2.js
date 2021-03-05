// algoExpet solution

// n(n log(n)) t | O(1) s
function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);

  let curentChangeCreated = 0;
  for (const coin of coins) {
    if (coin > curentChangeCreated + 1) return curentChangeCreated + 1;
    curentChangeCreated += coin;
  }

  return curentChangeCreated + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

const result = nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
console.log(result);

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
