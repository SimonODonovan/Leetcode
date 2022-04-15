/*
Given a string s, return the longest palindromic 
substring in s.

https://leetcode.com/problems/longest-palindromic-substring/
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if(s.length < 2) return s;
    let lo, hi, longest=0, longestStr = "";

    var findPalindrome = function(lo, hi)  {
        while(s[lo] == s[hi] && lo>=0 && hi<s.length) {
            if(longest < hi-lo+1) {
                longestStr = s.slice(lo, hi+1);
                longest = hi-lo+1;
            }
            lo--;
            hi++;
        }
    }

    for(let i = 0; i < s.length; i++) {
        findPalindrome(i, i); //odd
        findPalindrome(i, i+1); //even
    }
    return longestStr;
};

const input = "ddbabd";
const result = longestPalindrome(input);
console.log(result);