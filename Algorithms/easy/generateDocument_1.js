// O(n + m) T | O(c) S - n is the number of characters, m is the length of the document
// c is the number of unique character in the characters string
function generateDocument(characters, document) {

  let availableChars = {};

  for (const char of characters) {
    if (char in availableChars) {
      availableChars[char] = availableChars[char] + 1;
    } else {
      availableChars[char] = 1;
    }
  }

  for (const char of document) {
    if (char in availableChars && availableChars[char] > 0) {
      availableChars[char] = availableChars[char] - 1;
    } else {
      return false;
    }
  }

  return true;
}

const result = generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!");
console.log(result);

// Do not edit the line below.
exports.generateDocument = generateDocument;
