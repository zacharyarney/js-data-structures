const assert = require('assert');
const BinarySearchTree = require('./bst');

const bst = new BinarySearchTree(5);

bst.insert(2);
bst.insert(3);
bst.insert(7);
bst.insert(6);
bst.insert(9);
bst.insert(8);
bst.insert(21);
bst.insert(29);
bst.insert(11);

assert.strictEqual(bst.left.right.value, 3);
assert.strictEqual(bst.right.left.value, 6);

assert(bst.contains(6));
assert(bst.contains(2));

assert.strictEqual(bst.getMax().value, 29);

bst.removeNode(29);
console.log('21.right.value', bst.find(21).right.value);
assert.strictEqual(bst.getMax().value, 29);
// assert.strictEqual(bst.find(8).right.value, 9);
// assert.strictEqual(bst.find(8).left.value, 6);

console.log('ALL TESTS PASS');
