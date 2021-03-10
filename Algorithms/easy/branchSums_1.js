// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let sum = 0;
  let sums = Array();
  return helperBranchSums(root, sum, sums);
}

function helperBranchSums(binaryTree, sum, sums) {

  if (binaryTree.left === null && binaryTree.right === null) {
    sums.push(sum + binaryTree.value);
    return sums;
  }

  sum += binaryTree.value;

  if (binaryTree.left !== null)
    helperBranchSums(binaryTree.left, sum, sums);

  if (binaryTree.right !== null)
    helperBranchSums(binaryTree.right, sum, sums);

  return sums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
