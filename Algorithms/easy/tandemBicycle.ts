function sortArray(array: number[], asc: boolean) {
  array.sort(function (a: number, b: number) {
    if (asc) {
      return a - b
    } else {
      return b - a
    }
  })
}

export function tandemBicycle(redShirtSpeeds: number[], blueShirtSpeeds: number[], fastest: boolean) {
  if (fastest) {
    sortArray(redShirtSpeeds, true)
    sortArray(blueShirtSpeeds, false)
  } else {
    sortArray(redShirtSpeeds, true)
    sortArray(blueShirtSpeeds, true)
  }

  let speedCount = 0

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const redCyclistSpeed = redShirtSpeeds[i]
    const blueCyclistSpeed = blueShirtSpeeds[i]

    speedCount += redCyclistSpeed > blueCyclistSpeed ? redCyclistSpeed : blueCyclistSpeed
  }

  return speedCount
}
