/*
You are given an integer array height of length n. There are n 
vertical lines drawn such that the two endpoints of the ith 
line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.

https://leetcode.com/problems/container-with-most-water/
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let lo = 0;
    let hi = height.length - 1;
    let maxArea = -Infinity;
    while (lo < hi) {
        const currentArea = Math.min(height[lo], height[hi]) * (hi - lo);
        if (currentArea > maxArea)
            maxArea = currentArea;
        height[lo] > height[hi] ? hi-- : lo++;
    }
    return maxArea;
};

const input = [1,8,6,2,5,4,8,3,7];
const result = maxArea(input);
console.log(result);