function nodeDepths(root) {
  if (!root) return 0;
  return nodeDepthsHelper(root, 0, 0);
}

function nodeDepthsHelper(node, depth, sum) {
  if (!node) return 0;
  sum += nodeDepthsHelper(node.left, depth + 1, sum) +
    nodeDepthsHelper(node.right, depth + 1, sum);
  return sum + depth;
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
