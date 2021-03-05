function isValidSubsequence(array, sequence) {
  // Write your code here.
  let matches = 0;
  for (const currentNum of array) {
    if (matches == sequence.length) break;
    if (currentNum == sequence[matches]) matches++;
  }
  return matches == sequence.length;
}

const result = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
console.log(result);

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
