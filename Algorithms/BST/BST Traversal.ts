class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let inOrderTraverseHelper = (tree: BST | null, array: number[]) => {
  if (tree === null) return array;
  inOrderTraverseHelper(tree.left, array);
  array.push(tree.value);
  inOrderTraverseHelper(tree.right, array);
  return array;
};

export function inOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  inOrderTraverseHelper(tree, array);
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (tree === null) return array;
  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (tree === null) return array;
  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}