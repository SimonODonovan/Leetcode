/*
There is an integer array nums sorted in ascending order 
(with distinct values).

Prior to being passed to your function, nums is possibly 
rotated at an unknown pivot index k (1 <= k < nums.length) 
such that the resulting array is [nums[k], nums[k+1], ..., 
nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot 
index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an 
integer target, return the index of target if it is in 
nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

https://leetcode.com/problems/search-in-rotated-sorted-array/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length-1;

    // Find pivot
    while (left < right) {
        if(nums[left] > nums[right]) {
            left++;
        } else {
            right--;
        }
    }

    // Find side target is on
    let start;
    let end;
    if(nums[left-1] >= target && nums[0] <= target) {
        start = 0;
        end = left;
    } else {
        start = right;
        end = nums.length-1;
    }

    // Binary search for target
    while(start <= end) {
        let midpoint = Math.floor((start + end) / 2);
        let mid = nums[midpoint];
        if(mid > target) end = midpoint-1;
        else start = midpoint+1;
        if(mid == target) return midpoint;
    }

    return -1;
};

const input = [3, 1];
const input2 = 3;
const result = search(input, input2);
console.log(result);