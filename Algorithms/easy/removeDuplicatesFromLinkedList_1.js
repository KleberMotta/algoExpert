// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {

  // percorrer linkdedList & conferir duplicata & remover in place
  let currentNode = linkedList;
  while (currentNode != null) {
    while (currentNode.next !== null && currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }

  return linkedList;
}

const result = removeDuplicatesFromLinkedList({
  value: 1,
  next: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 2,
        next: null
      }
    }
  }
});
console.log(result);

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
