
// O(n) T | O(n) S - not optimal solution
function getNthFib(n, nTh = { 1: 0, 2: 1 }) {

  if (n in nTh) {
    return nTh[n];
  } else {
    nTh[n] = getNthFib(n - 1, nTh) + getNthFib(n - 2, nTh);
  }
  return nTh[n];
}

const n = 4;
const result = getNthFib(n);
console.log(result);

// Do not edit the line below.
exports.getNthFib = getNthFib;