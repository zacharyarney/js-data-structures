class BinarySearchTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);

    if (this.value > value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = newNode;
      }
    } else if (this.value < value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = newNode;
      }
    }
  }

  find(target) {
    if (this.value === target) {
      return this;
    }

    if (this.value > target && this.left) {
      // don't forget to return recursive call when function returns
      return this.left.find(target);
    }

    if (this.value < target && this.right) {
      return this.right.find(target);
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
    let cur = this;
    while (cur.right) {
      cur = cur.right;
    }
    return cur;
  }

  getMin() {
    let cur = this;
    while (cur.left) {
      cur = cur.left;
    }
    return cur;
  }
}

module.exports = BinarySearchTree;
