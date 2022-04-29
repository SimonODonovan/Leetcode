/*
Given a binary tree, determine if it is height-balanced.

https://leetcode.com/problems/balanced-binary-tree/
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let isBalanced = true;

    const getHeight = function (root) {
        if (!root) return 0;
        const leftHeight = getHeight(root.left);
        const rightHeight = getHeight(root.right);
        const difference = Math.abs(leftHeight - rightHeight);
        isBalanced = isBalanced && difference <= 1;
        return Math.max(leftHeight, rightHeight)+1;
    }
    getHeight(root);
    return isBalanced;
};
//[3,9,20,null,null,15,7]
// const input = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
//[1,2,2,3,3,null,null,4,4]
const input = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)), new TreeNode(2));
const result = isBalanced(input);
console.log(result);