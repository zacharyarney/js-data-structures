class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newNode = new Node(value);
    const cur = this.head;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head === this.tail) {
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      while (cur.next !== null) {
        cur = cur.next;
      }
      cur.next = newNode;
      this.tail = newNode;
    }
    return this.head;
  }

  printList() {
    console.log(this.head.value);
  }
}

const list = new SinglyLinkedList();
list.addToTail(1);
list.printList();
