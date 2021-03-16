// O(n lo(n) + m log(m)) T | O(1) 
function smallestDifference(arrayOne, arrayTwo) {

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let closestSumToZero = Infinity;
  let arrOfSummedValues = []

  let one = 0, two = 0;
  while (one < arrayOne.length && two < arrayTwo.length) {

    let currentOne = arrayOne[one];
    let currentTwo = arrayTwo[two];
    let currentSum = currentOne - currentTwo;

    if (currentOne === currentTwo) {
      return [currentOne, currentTwo];
    } else if (currentOne > currentTwo) {
      currentSum = currentOne - currentTwo;
      two++;
    } else {
      currentSum = currentTwo - currentOne;
      one++;
    }

    if (closestSumToZero > currentSum) {
      closestSumToZero = currentSum;
      arrOfSummedValues = [currentOne, currentTwo];
    }
  }

  return arrOfSummedValues;
}

const arr1 = [-1, 5, 10, 20, 3];
const arr2 = [26, 134, 135, 15, 17];

const result = smallestDifference(arr1, arr2);
console.log(result);

exports.smallestDifference = smallestDifference;
