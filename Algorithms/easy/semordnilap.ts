function verifyPalindrome(a: string, b: string) {
  if (a.length !== b.length) return false
  const reversedB = Array.from(b).reverse().join('')
  return a === reversedB
}

export function semordnilap(words: string[]) {
  const result: string[][] = []
  const registerMap = new Map<string, boolean>()

  for (let a = 0; a < words.length; a++) {
    const currentStringA = words[a]
    for (let b = 0; b < words.length; b++) {
      const currentStringB = words[b]
      if (
        a === b ||
        registerMap.get(currentStringA + currentStringB) ||
        registerMap.get(currentStringB + currentStringA)
      ) {
        continue
      }

      if (verifyPalindrome(currentStringA, currentStringB)) {
        result.push([currentStringA, currentStringB])
      }

      registerMap.set(currentStringA + currentStringB, true)
    }
  }
  return result
}
