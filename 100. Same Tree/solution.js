/*
Given the roots of two binary trees p and q, write a 
function to check if they are the same or not.

Two binary trees are considered the same if they are 
structurally identical, and the nodes have the same value.

https://leetcode.com/problems/same-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p != null && q != null) {
        const sameValue = p.val == q.val;
        const sameLeft = isSameTree(p.left, q.left);
        const sameRight = isSameTree(p.right, q.right);
        return sameValue && sameLeft && sameRight;
    } else if ((p == null) != (q == null)) {
        return false;
    }
    return true;
};
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

const tree3 = new TreeNode(1, new TreeNode(2));
const tree4 = new TreeNode(1, null, new TreeNode(3));

const result = isSameTree(tree1, tree2);
console.log(result);