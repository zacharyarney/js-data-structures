class BinarySearchTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    newNode = new BinarySearchTree(value);

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
    if (this.target === target) {
      return true;
    } else if (this.target > target) {
      if (this.left) {
        this.left.contains(target);
      }
    } else if (this.target < target) {
      if (this.right) {
        this.right.contains(target);
      }
    }
    return false;
  }

  getMax() {
    while(this.right) {
      this = this.right;
    }
    return this.value;
  }
}

