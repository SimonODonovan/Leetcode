/*
Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']', determine if the input string 
is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const openingBrackets = ["(", "{", "["]
    const matchingBrackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    for (let bracket of s.split("")) {
        if (openingBrackets.includes(bracket)) {
            stack.push(bracket);
        }
        else {
            const storedBracket = stack.pop();
            if (!storedBracket) return false;
            if (storedBracket !== matchingBrackets[bracket]) return false;
        }
    }
    return stack.length == 0;
};

const input = "(]";
const result = isValid(input);
console.log(result);