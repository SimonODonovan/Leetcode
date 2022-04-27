/*
Given an array of integers nums which is sorted in 
ascending order, and an integer target, write a 
function to search target in nums. If target exists, 
then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

https://leetcode.com/problems/binary-search/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    let mid;
    while (lo <= hi) {
        mid = Math.floor((hi + lo) / 2);
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
};

const input = [5];
const input2 = 5;
const result = search(input, input2);
console.log(result);