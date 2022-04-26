/*
Given an array of distinct integers candidates and a target 
integer target, return a list of all unique combinations of 
candidates where the chosen numbers sum to target. You may 
return the combinations in any order.

The same number may be chosen from candidates an unlimited 
number of times. Two combinations are unique if the frequency 
of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that 
sum up to target is less than 150 combinations for the given input.

https://leetcode.com/problems/combination-sum/
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];

    function dfs(i, cur, total) {
        if (total > target || i > candidates.length - 1) {
            return
        } else if (total == target) {
            res.push([...cur]);
            return;
        }

        cur.push(candidates[i])
        dfs(i, cur, total + candidates[i]);
        cur.pop();
        dfs(i + 1, cur, total);
    }

    dfs(0, [], 0);
    return res;
};

const input = [2, 3, 6, 7];
const input2 = 7;
const result = combinationSum(input, input2);
console.log(result);