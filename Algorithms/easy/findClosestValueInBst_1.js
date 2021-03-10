function findClosestValueInBst(tree, target) {

  let closest = tree.value;

  while (tree != null) {
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    }
    if (tree.value > target) {
      tree = tree.left;
    } else if (tree.value < target) {
      tree = tree.right;
    } else {
      break;
    }
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const result = findClosestValueInBst({
  "left": {
    "left": {
      "left": {
        "left": null,
        "right": null,
        "value": 1
      },
      "right": null,
      "value": 2
    },
    "right": {
      "left": null,
      "right": null,
      "value": 5
    },
    "value": 5
  },
  "right": {
    "left": {
      "left": null,
      "right": {
        "left": null,
        "right": null,
        "value": 14
      },
      "value": 13
    },
    "right": {
      "left": null,
      "right": null,
      "value": 22
    },
    "value": 15
  },
  "value": 10
}, 12);
console.log(result);

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
