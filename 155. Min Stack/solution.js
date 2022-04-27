/*
Design a stack that supports push, pop, top, and 
retrieving the minimum element in constant time.

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.

https://leetcode.com/problems/min-stack/
*/


var MinStack = function () {
    this.stack = [];
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const len = this.stack.length;
    if(len == 0) return null;
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    const len = this.stack.length;
    if(len == 0) return null;
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    const len = this.stack.length;
    if(len == 0) return null;
    if(len == 1) return this.stack[0];
    return this.stack.reduce((a, b) => Math.min(a, b));
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(1)
obj.push(2)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()