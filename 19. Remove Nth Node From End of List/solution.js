/*
Given the head of a linked list, remove the nth node from the 
end of the list and return its head.

https://leetcode.com/problems/remove-nth-node-from-end-of-list/
*/

/**
 * Definition for singly-linked list.
 */
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let lag = head;
    let front = head;

    for(let i = 0; i < n; i++) {
        front = front.next;
    }
    while(front && front.next) {
        front = front.next;
        lag = lag.next;
    }
    if(!front)
        return null;
    else
        lag.next = lag.next ? lag.next.next : null;
        return head;
};

const input = [1, 2, 3, 4, 5];
const input2 = 2;
const result = removeNthFromEnd(input, input2);
console.log(result);