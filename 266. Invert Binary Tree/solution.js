/*
Given the root of a binary tree, invert the tree, and return its root.

https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if(root) {
        let tmp = invertTree(root.left);
        root.left = invertTree(root.right);
        root.right = tmp;
    }
    return root;
};

let left = new TreeNode(7, new TreeNode(8), new TreeNode(9))
let right = new TreeNode(4, new TreeNode(5), new TreeNode(6))
const input = new TreeNode(1, left);
const result = invertTree(input);
console.log(result);