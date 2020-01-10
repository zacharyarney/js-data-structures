function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

function SinglyLinkedList(head = null, tail = null) {
  this.head = head;
  this.tail = tail;
}

SinglyLinkedList.prototype.getLength = () => {
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
    while (cur.next) {
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
  cur = this.head;

  while (cur.next) {
    if (cur.value === value) {
      return true;
    }
  }
  return false;
};

SinglyLinkedList.prototype.printList = () => {
  let str = '';
  let cur = this.head;
  while (cur.next) {
    str += ', ' + cur.value;
  }
  console.log(str);
}

linkedList = new SinglyLinkedList()
