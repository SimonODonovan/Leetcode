/*
Given two strings s and t, return true if t is 
an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging 
the letters of a different word or phrase, typically 
using all the original letters exactly once.

https://leetcode.com/problems/valid-anagram/
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (t.length !== s.length) return false;
    const lookup = {};
    for(let char of s) {
        lookup[char] = (lookup[char] || 0) + 1;
    }
    for(let char of t) {
        if(!lookup[char]) return false;
        lookup[char]--;
    }
    return true;
};

const input = "anagram";
const input2 = "nagaram";
const result = isAnagram(input, input2);
console.log(result);