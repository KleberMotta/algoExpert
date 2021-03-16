// O(n) T | o(k) S - where k is resulting size of the return string
function runLengthEncoding(string) {
  let encodedString = [];
  let currentRunLenght = 1;

  for (let idx = 1; idx < string.length; idx++) {

    const currentChar = string[idx];
    const previousChar = string[idx - 1];

    if (currentChar !== previousChar || currentRunLenght === 9) {
      encodedString.push(currentRunLenght.toString());
      encodedString.push(previousChar);
      currentRunLenght = 0;
    }

    currentRunLenght++;

  }

  encodedString.push(currentRunLenght.toString());
  encodedString.push(string[string.length - 1]);

  return encodedString.join('');
}

const result = runLengthEncoding("AAAAAAAAAA");
console.log(result);

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
