// Avarage case: when the tree is balanced
// O(n) time | O(h) space - where n is the number os nodes in
// the Binary Tree and h is the height of the Binary Tree
function nodeDepths(root) {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const result = nodeDepths({
  "left": {
    "left": {
      "left": {
        "left": null,
        "right": null,
        "value": 8
      },
      "right": {
        "left": null,
        "right": null,
        "value": 9
      },
      "value": 4
    },
    "right": {
      "left": null,
      "right": null,
      "value": 5
    },
    "value": 2
  },
  "right": {
    "left": {
      "left": null,
      "right": null,
      "value": 6
    },
    "right": {
      "left": null,
      "right": null,
      "value": 7
    },
    "value": 3
  },
  "value": 1
});
console.log(result);

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
