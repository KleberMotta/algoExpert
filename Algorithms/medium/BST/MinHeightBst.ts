export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  static buildFromArray(array: number[]) {
    return this.buildFromArrayHelper(array, 0, array.length - 1)
  }

  private static buildFromArrayHelper(array: number[], startIdx: number, endIdx: number): BST | null {
    if (endIdx < startIdx) {
      return null
    }

    const midIdx = Math.floor((endIdx + startIdx) / 2)

    const currentNode = new BST(array[midIdx])
    currentNode.left = this.buildFromArrayHelper(array, startIdx, midIdx - 1)
    currentNode.right = this.buildFromArrayHelper(array, midIdx + 1, endIdx)

    return currentNode
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}

export function minHeightBst(array: number[]) {
  return BST.buildFromArray(array)
}
