// This is an input class. Do not edit.
class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function validateBstHelper(tree: BST | null, minValue: number, maxValue: number): boolean {
  if (tree === null) return true
  if (tree.value < minValue || tree.value >= maxValue) return false

  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value)
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue)
}

export function validateBst(tree: BST) {
  return validateBstHelper(tree, -Infinity, Infinity)
}
