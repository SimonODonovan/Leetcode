/*
A phrase is a palindrome if, after converting all 
uppercase letters into lowercase letters and removing 
all non-alphanumeric characters, it reads the same 
forward and backward. Alphanumeric characters include 
letters and numbers.

Given a string s, return true if it is a palindrome, or 
false otherwise.

https://leetcode.com/problems/valid-palindrome/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start++] !== s[end--])
            return false
    }
    return true;
};

const input = "amdma";
const result = isPalindrome(input);
console.log(result);