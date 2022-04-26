/*
Given an integer array nums, return true if any value 
appears at least twice in the array, and return false 
if every element is distinct.

https://leetcode.com/problems/contains-duplicate/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    return nums.length >= 100000 
        ? containsDuplicateObj(nums) 
        : containsDuplicateSet(nums);
};

function containsDuplicateObj(nums) {
    const existingNumbers = {};
    for (let num of nums) {
        if (existingNumbers[num])
            return true;
        existingNumbers[num] = true;
    }
    return false;
}

function containsDuplicateSet(nums) {
    const set = new Set(nums)
    return set.size !== nums.length;
}

const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const result = containsDuplicate(input);
console.log(result);