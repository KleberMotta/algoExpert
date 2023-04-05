// This is an input class. Do not edit.
export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class TreeInfo {
  rootIdx: number

  constructor(rootIdx: number) {
    this.rootIdx = rootIdx
  }
}

function reconstructBstFromRange(
  lowerBound: number,
  upperBound: number,
  preOrderTraversalValues: number[],
  subTreeInfo: TreeInfo,
): BST | null {
  const rootValue = preOrderTraversalValues[subTreeInfo.rootIdx]

  if (subTreeInfo.rootIdx === preOrderTraversalValues.length) return null
  if (rootValue < lowerBound || rootValue >= upperBound) return null

  subTreeInfo.rootIdx++
  const leftSubTree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, subTreeInfo)
  const rightSubTree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, subTreeInfo)
  return new BST(rootValue, leftSubTree, rightSubTree)
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  const treeInfo = new TreeInfo(0)
  return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo)
}
