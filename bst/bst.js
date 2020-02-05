class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(root = this.root, value) {
    console.log('cur: ', cur);
    const newNode = new Node(value);

    // this will require two methods. 
    // or maybe I could run a check for current node === this.head
    
    if (root === null) {
      this.root = newNode;
    } else if (cur.value > value) {
      if (cur.left) {
        this.insert(value);
      } else {
        cur.left = newNode;
      }
    } else if (cur.value < value) {
      if (cur.right) {
        cur.right.insert(value);
      } else {
        cur.right = newNode;
      }
    }
  }

  find(target) {
    const cur = this.root;
    if (cur.value === target) {
      return cur;
    }

    if (cur.value > target && cur.left) {
      // don't forget to return recursive call when function returns
      return cur.left.find(target);
    }

    if (cur.value < target && cur.right) {
      return cur.right.find(target);
    }
    return null;
  }

  // find parent of value
  // if value has no children, remove connection
  // if value has one child, set parent.left/right to child of target
  // if value has two children

  remove(value) {
    this.root = this.removeNode(this.root, value);
    // if (this.left.value === value) {
    //   const parent = this;
    //   const target = this.left;
    //   if (!target.left && !target.right) {
    //     this.left = null;
    //   } else if (target.left && !target.right) {
    //     this.left = target.left;
    //   } else if (target.right && !target.left) {
    //     this.left = target.right;
    //   } else {
    //     let successor = target.right.getMin();
    //     parent.left = successor;
    //     successor.left = target.left;
    //     successor.right = target.right;
    //     successor.right.getMin().left = null;
    //   }
    // } else if (this.right.value === value) {
    //   const parent = this;
    //   const target = this.right;
    //   if (!target.left && !target.right) {
    //     this.left = null;
    //   } else if (target.left && !target.right) {
    //     this.left = target.left;
    //   } else if (target.right && !target.left) {
    //     this.left = target.right;
    //   } else {
    //     let successor = target.right.getMin();
    //     parent.right = successor;
    //     successor.left = target.left;
    //     successor.right = target.right;
    //     successor.right.getMin().left = null;
    //   }
    // }
    // if (this.value > value) {
    //   this.left.removeNode(value);
    // } else if (this.value < value) {
    //   this.right.removeNode(value);
    // }
  }

  removeNode(value) {
    let cur = this;
    console.log('cur.value = ', cur.value);
    if (cur.value > value) {
      cur.left.remove(value);
    } else if (cur.value < value) {
      cur.right.remove(value);
    } else {
      if (cur.left === null && cur.right === null) {
        cur = null;
      }
    }
  }

  contains(target) {
    if (this.find(target) !== null) {
      return true;
    }
    return false;
  }

  getMax() {
    let cur = this.root;
    while (cur.right) {
      cur = cur.right;
    }
    return cur;
  }

  getMin() {
    let cur = this.root;
    while (cur.left) {
      cur = cur.left;
    }
    return cur;
  }
}

module.exports = { Node, BinarySearchTree };
