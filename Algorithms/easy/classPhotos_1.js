// O(n log(n)) T | O (n) - where N is the size of the arrays
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b)
  blueShirtHeights.sort((a, b) => a - b)

  const taller = redShirtHeights[0] > blueShirtHeights[0] ? 'red' : 'blue'

  for (idx = 0; idx < redShirtHeights.length; idx++) {
    if (redShirtHeights[idx] >= blueShirtHeights[idx] && taller === 'blue') {
      return false
    } else if (redShirtHeights[idx] <= blueShirtHeights[idx] && taller === 'red') {
      return false
    }
  }
  return true
}

const redShirtHeights = [2, 4, 7, 5, 1]
const blueShirtHeights = [3, 5, 6, 8, 2]
const result = classPhotos(redShirtHeights, blueShirtHeights)
console.log(result)

// Do not edit the line below.
exports.classPhotos = classPhotos
