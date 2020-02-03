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
    }

    if (this.value < value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = newNode;
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    
    if (this.value > target && this.left) {
      // don't forget to return recursive call when function returns
      return this.left.contains(target);
    }

    if (this.value < target && this.right) {
        return this.right.contains(target);
    }
    return false;
  }

  getMax() {
    let cur = this;
    while (cur.right) {
      cur = cur.right;
    }
    return cur.value;
  }
}

module.exports = BinarySearchTree;
