function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
}

SinglyLinkedList.prototype.getHead = function() {
  return this.head;
}

SinglyLinkedList.prototype.getLength = function() {
  let cur = this.head;
  let length = 0;

  // if no nodes return length (0)
  if (!this.head) {
    return length;
  } else if (this.head === this.tail) {
    // if single node increment length by one and return
    return ++length;
  } else {
    // increment length for each node
    while (cur !== null) {
      length++;
      cur = cur.next;
    }

    return length;
  }
};

SinglyLinkedList.prototype.addToTail = (value) => {
  const newNode = new Node(value);

  if (!this.head) {
    // if no nodes, new node is alone and becomes both head and tail
    this.head = newNode;
    this.tail = newNode;
    return this.head;
  } else if (this.head === this.tail) {
    // if single node
    this.head.next = newNode;
    this.tail = newNode;
    return this.head;
  } else {
    // since tail is defined in the class we can simply add a .next to it
    // and redefine this.tail as the new node.
    this.tail.next = newNode;
    this.tail = newNode;
    return this.head;
  }
};

SinglyLinkedList.prototype.insertNode = (value, index) => {
  if (index > this.getLength()) {
    this.addToTail(value);
    return this.head;
  }

  const newNode = new Node(value);
  let cur = this.head;

  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  } else {
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }

    newNode.next = cur.next;
    cur.next = newNode;
    return this.head;
  }
};

SinglyLinkedList.prototype.removeNode = (index) => {
  let cur = this.head;

  if (index === 0) {
    this.head = this.head.next;
    return this.head;
  } else {
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }
    cur.next = cur.next.next;
    return this.head;
  }
};

SinglyLinkedList.prototype.contains = (value) => {
  let cur = this.head;

  while (cur !== null) {
    if (cur.value === value) {
      return true;
    }
    cur = cur.next;
  }
  return false;
};

SinglyLinkedList.prototype.reverse = () => {
  let prev = null;
  let cur = this.head; // set current to head of list
  let next = null;
  this.tail = this.head;

  /* This loop essentially swaps the pointers around so that
   * the cur.next is pointing to the previous node.
   * This is done through a simple swap pattern by storing the value
   * of cur.next, moving the pointer to the previous node
   * and incrementing the curent node to the stored next node
   * */
  while (cur) {
    this.head = cur;
    next = cur.next; // store cur.next in next
    cur.next = prev; // set cur.next to previous value (initialized to null)
    prev = cur; // set prev to cur
    cur = next; // set cur to stored value of cur.next
  }
  console.log(this.head);
  return this.head;
};

SinglyLinkedList.prototype.printList = () => {
  let str = '';
  let cur = this.head;

  if (!this.head) {
    console.log('[]');
    return;
  }
  while (cur !== null) {
    if (cur === this.head) {
      str += cur.value;
    } else {
      str += ', ' + cur.value;
    }
    cur = cur.next;
  }
  console.log(str);
};

const linkedList = new SinglyLinkedList();
console.log(linkedList);
console.log(linkedList.getLength());
//module.exports = linkedList;

linkedList.printList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToTail(5);
console.log(linkedList.contains(4));
console.log(linkedList.contains(6));
console.log(linkedList.getLength());

linkedList.printList();
linkedList.reverse();
console.log(linkedList.getHead());
linkedList.printList();
//TODO TIME TO WRITE SOME TESTS, YUHBIIIISSHHHH!!!!
