// O(n) T | o(n) S - where n is the length of the input string
function runLengthEncoding(string) {
  let encodedString = [];
  for (let idx = 0; idx < string.length; idx++) {
    let ocurrences = 1;
    const currentChar = string[idx];
    while (ocurrences < 9 && string[idx + 1] === currentChar) {
      ocurrences++;
      idx++;
    }
    encodedString.push(ocurrences);
    encodedString.push(currentChar);
  }
  return encodedString.join('');
}

const result = runLengthEncoding("aA");
console.log(result);

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
