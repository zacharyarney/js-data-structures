class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  addToTail(value) {
    const newNode = new Node(value);
    let cur = this.head;

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

  reverseList() {
    let prev = null;
    let cur = this.head;
    let next = null;

    this.tail = this.head;

    while (cur) {
      this.head = cur;
      next = cur.next; // store cur.next
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return this.head;
  }

  printList() {
    let cur = this.head;
    let str = '';

    if (!this.head) {
      str = 'List is empty!';
    }

    while (cur) {
      if (cur === this.head) {
        str += cur.value;
      } else {
        str += `, ${cur.value}`;
      }
      cur = cur.next;
    }
    console.log(str);
    return str;
  }
}

const list = new SinglyLinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.printList();
list.reverseList();
list.printList();