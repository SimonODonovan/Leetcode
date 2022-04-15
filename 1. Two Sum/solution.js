/*
 Given an array of integers nums and an integer 
 target, return indices of the two numbers such 
 that they add up to target.

 You may assume that each input would have exactly 
 one solution, and you may not use the same element 
 twice.

 You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const lookup = {};
    for (let i = 0; i < nums.length; i++) {
        const needle = target - nums[i];
        const needleIndex = lookup[needle];
        if (needleIndex != undefined) {
            return [needleIndex, i]
        }
        lookup[nums[i]] = i;
    }
};

let nums = [2,7,11,15], target = 9;
const res = twoSum(nums, target);
console.log(res);