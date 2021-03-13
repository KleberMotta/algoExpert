// O(2^n) T | O(n) S - very naive solution
function getNthFib(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

const n = 5;
const result = getNthFib(n);
console.log(result);

// Do not edit the line below.
exports.getNthFib = getNthFib;