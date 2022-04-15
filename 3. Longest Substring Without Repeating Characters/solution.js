/*
Given a string s, find the length of the 
longest substring without repeating characters.

https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const lookup = {};
    let longestString = 0;
    let rear = 0, front = 0;
    while (front < s.length) {
        let newChar = s[front];
        if (!lookup[newChar]) {
            lookup[newChar] = true;
            front++;
        } else {
            delete lookup[s[rear]];
            rear++;
        }
        if ((front - rear) > longestString)
            longestString = front - rear;
    }
    return longestString;
};

const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log(result);