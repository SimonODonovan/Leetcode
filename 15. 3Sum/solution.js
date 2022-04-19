/*
Given an integer array nums, return all the triplets 
[nums[i], nums[j], nums[k]] such that i != j, i != k, 
and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

https://leetcode.com/problems/3sum/
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    if (nums.length < 3) return result;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        while (i > 0 && nums[i] == nums[i - 1]) i++; // skip pos0 duplicates
        let lo = i + 1;
        let hi = nums.length - 1;

        while (lo < hi) {
            let currentSum = nums[i] + nums[lo] + nums[hi];
            if (currentSum > 0)
                hi--;
            else if (currentSum < 0)
                lo++;
            else {
                result.push([nums[i], nums[lo], nums[hi]])
                lo++;
                while (nums[lo] == nums[lo - 1] && lo < hi) lo++; // skip pos1 duplicates
            };
        }
    }
    return result;
};

const input = [-1, 0, 1, 2, -1, -4];
const result = threeSum(input);
console.log(result);