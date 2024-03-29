/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-this-alias */
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value: number): BST {
    let currentNode: BST | null = this
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value)
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value)
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
    return this
  }

  contains(value: number): boolean {
    let currentNode: BST | null = this
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        return true
      }
    }

    return false
  }

  remove(value: number, parentNode: BST | null = null): BST {
    let currentNode: BST | null = this
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else {
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = currentNode.right.getMinValue()
          currentNode.right.remove(currentNode.value, currentNode)
        } else if (parentNode === null) {
          if (currentNode.left !== null) {
            currentNode.value = currentNode.left.value
            currentNode.right = currentNode.left.right
            currentNode.left = currentNode.left.left
          } else if (currentNode.right !== null) {
            currentNode.value = currentNode.right.value
            currentNode.left = currentNode.right.left
            currentNode.right = currentNode.right.right
          } else {
            // do nothing - verify with examinator
          }
        } else if (parentNode.left === currentNode) {
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right
        } else if (parentNode.right === currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right
        }
        break
      }
    }
    return this
  }

  getMinValue(): number {
    let currentNode: BST = this
    while (currentNode.left !== null) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }
}
