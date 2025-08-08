class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value, null);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, null);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let count = 1;
    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      count += 1;
    }

    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return null;
    }

    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let count = 0;
    let tmp = this.head;

    while (tmp) {
      if (count === index) return tmp;
      tmp = tmp.nextNode;
      count++;
    }

    return null;
  }

  pop() {
    // No nodes
    if (!this.head) return null;

    // One node
    if (!this.head.nextNode) {
      const popped = this.head;
      this.head = null;
      return popped;
    }

    // More than one node
    let tmp = this.head;
    while (tmp.nextNode.nextNode) {
      tmp = tmp.nextNode;
    }

    const popped = tmp.nextNode;
    tmp.nextNode = null;
    return popped;
  }

  contains(value) {
    if (!this.head) return false;

    let tmp = this.head;
    while (tmp) {
      if (tmp.value === value) {
        return true;
      } else {
        tmp = tmp.nextNode;
      }
    }

    return false;
  }

  find(value) {
    if (!this.head) return null;

    let count = 0;
    let tmp = this.head;
    while (tmp) {
      if (tmp.value === value) {
        return count;
      }
      tmp = tmp.nextNode;
      count++;
    }

    return null;
  }

  toString() {
    if (!this.head) {
      console.log("null");
      return;
    }

    let str = "";
    let tmp = this.head;
    while (tmp) {
      str += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    str += "null";
    console.log(str);
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      console.log("Index out of bounds");
      return;
    }

    const newNode = new Node(value, null);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let prev = this.head;
    count = 0;

    while (count < index - 1) {
      prev = prev.nextNode;
      count++;
    }

    newNode.nextNode = prev.nextNode;
    prev.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.log("Index out of bounds");
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
    }

    let prev = this.head;
    let count = 0;

    while (count < index - 1) {
      prev = prev.nextNode;
      count++;
    }

    prev.nextNode = prev.nextNode.nextNode;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());