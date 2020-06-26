class LinkedList {
  constructor(value) {
    // make fields private if possible
    this.first = null;
    this.last = null;
    this.count = 0;

    if (value) this.addFirst(value);
  }

  addFirst(value) {
    if (!value) throw "value cannot be null";

    if (this.first && this.first.value) {
      const nextNode = this.first;
      this.first = new Node(value, nextNode);
    } else {
      this.first = new Node(value);
      this.last = this.first;
    }
    this.count++;
  }

  addLast(value) {
    if (!value) throw "value cannot be null";

    if (this.last && this.last.value) {
      const prevLast = this.last;
      this.last = new Node(value);
      prevLast.next = this.last;
    } else {
      this.last = new Node(value);
      this.first = this.last;
    }
    this.count++;
  }

  deleteFirst() {
    if (!this.first) return;

    if (this.count === 1) {
      this.first = null;
      this.last = null;
      this.count = 0;
      return;
    }

    const oldFirst = this.first;
    this.first = oldFirst.next;
    oldFirst.next = null;
    this.count--;
  }

  deleteLast() {
    if (!this.last) return;

    if (this.count === 1) {
      this.first = null;
      this.last = null;
      this.count = 0;
      return;
    }

    const prevNode = this.getPrevNode();
    this.last = prevNode;
    prevNode.next = null;
    this.count--;
  }

  getPrevNode() {
    let node = this.first;
    let prevNode = node;

    while (node.next) {
      prevNode = node;
      node = node.next;
    }

    return prevNode;
  }

  constains(value) {
    if (!value) return false;
    if (this.count === 0) return false;

    let node = this.first;
    while (node.next) {
      if (node.value === value) return true;
      node = node.next;
    }

    return false;
  }

  indexOf(value) {
    if (!value) return -1;
    if (this.count === 0) return -1;

    let node = this.first;
    let index = 0;

    while (node.next) {
      if (node.value === value) return index;
      node = node.next;
      index++;
    }

    return -1;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next instanceof Node ? next : null;
  }
}

// simple usage
// const linkedlist = new LinkedList();
// linkedlist.addFirst(5);
// linkedlist.addFirst(20);
// linkedlist.addLast(10);
// linkedlist.addLast(39);
// linkedlist.addLast(40);
// console.log(linkedlist.contains(5));
// console.log(linkedlist.indexOf(10));
// debugger;
