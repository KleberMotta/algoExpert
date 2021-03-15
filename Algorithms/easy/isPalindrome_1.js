// O(n) T | O(1) S
function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
