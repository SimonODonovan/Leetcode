/*
Given the roots of two binary trees root and subRoot, 
return true if there is a subtree of root with the same 
structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists 
of a node in tree and all of this node's descendants. 
The tree tree could also be considered as a subtree of itself.

https://leetcode.com/problems/subtree-of-another-tree/
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    // bugs go here
};

const subTree = new TreeNode(4, new TreeNode(1), new TreeNode(2))
const input = new TreeNode(3, subTree, new TreeNode(5));
const result = isSubtree(input, subTree);

const input2 = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))), new TreeNode(5));
const result2 = isSubtree(input2, subTree);

const input3 = new TreeNode(1, new TreeNode(1));
const subTree3 = new TreeNode(1);
const result3 = isSubtree(input3, subTree3);

console.log(result);
console.log(result2);
console.log(result3);