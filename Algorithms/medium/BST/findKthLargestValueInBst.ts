// This is an input class. Do not edit.
export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const inOrderTraverseHelper = (tree: BST | null, array: number[]) => {
  if (tree === null) return array
  inOrderTraverseHelper(tree.left, array)
  array.push(tree.value)
  inOrderTraverseHelper(tree.right, array)
  return array
}

function inOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  inOrderTraverseHelper(tree, array)
  return array
}

export function findKthLargestValueInBst(tree: BST, k: number) {
  const newArray: number[] = []
  inOrderTraverse(tree, newArray)
  return newArray[newArray.length - k]
}
