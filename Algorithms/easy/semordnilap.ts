export function semordnilap(words: string[]) {
  let result: string[][]
  let map = new Map<string, string>()

  for (let i=0; i < words.length; i++) {
    const currentStringA = words[i]
    for (let j=0; i < words.length; j++) {
      const currentStringB = words[j]
      if (map.get(currentStringA+currentStringB) || 
          currentStringA === currentStringB) {
        continue;
      }
    }
  }
  return []
}