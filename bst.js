class BinarySearchTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    newNode = new BinarySearchTree(value);

    if (self.value > value) {
      if (self.left) {
        self.left.insert(value);
      } else {
        self.left = newNode;
      }
    }

    if (self.value < value) {
      if (self.right) {
        self.right.insert(value);
      } else {
        self.right = newNode;
      }
    }
  }

  contains(value) {
    if (self.value === value) {
      return true;
    } else if (self.value > value) {
      if (self.left) {
        self.left.contains(value);
      }
    } else if (self.value < value) {
      if (self.right) {
        self.right.contains(value);
      }
    }
    return false;
  }
}