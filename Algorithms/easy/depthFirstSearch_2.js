// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

const result = new Node('A');
result.addChild('B').addChild('C').addChild('D');
result.children[0].addChild('E').addChild('F');
result.children[2].addChild('G').addChild('H');
result.children[0].children[1].addChild('I').addChild('J');
result.children[2].children[0].addChild('K');
console.log(result.depthFirstSearch([]));

// Do not edit the line below.
exports.Node = Node;
