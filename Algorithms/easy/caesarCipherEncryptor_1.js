// O(n) T | O(n) S
function caesarCipherEncryptor(string, key) {
  newLetter = [];
  newKey = key % 26;
  for (const letter of string) {
    newLetter.push(getNewLetter(letter, newKey));
  }
  return newLetter.join('');
}

function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}

const result = caesarCipherEncryptor("abc", 3);
console.log(result);

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
