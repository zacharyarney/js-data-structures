const assert = require('assert');
const BinarySearchTree = require('./bst');

const bst = new BinarySearchTree(5);

bst.insert(2);
bst.insert(3);
bst.insert(7);
bst.insert(6);
console.log(bst.getMax());
assert.strictEqual(bst.left.right.value, 3);
assert.strictEqual(bst.right.left.value, 6);
assert(bst.contains(6));
assert(bst.contains(1));