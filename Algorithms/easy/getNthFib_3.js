
// O(n) T | O(1) S - optimal solution
function getNthFib(n) {

  let lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFibNumber = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFibNumber;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

const n = 4;
const result = getNthFib(n);
console.log(result);

// Do not edit the line below.
exports.getNthFib = getNthFib;