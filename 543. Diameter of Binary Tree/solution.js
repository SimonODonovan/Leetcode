/*
Given the root of a binary tree, return the length of the 
diameter of the tree.

The diameter of a binary tree is the length of the longest 
path between any two nodes in a tree. This path may or may 
not pass through the root.

The length of a path between two nodes is represented by the 
number of edges between them.

https://leetcode.com/problems/diameter-of-binary-tree/
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;
    const getHeight = function (root) {
        if (!root) return 0;
        let leftHeight = getHeight(root.left);
        let rightHeight = getHeight(root.right);
        max = Math.max(max, leftHeight + rightHeight);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    getHeight(root);
    return max;
};

//[1,2,3,4,5]
//3
const input = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const result = diameterOfBinaryTree(input);
console.log(result);