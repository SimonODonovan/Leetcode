/*
Given the head of a singly linked list, 
reverse the list, and return the reversed list.

https://leetcode.com/problems/reverse-linked-list/
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if(!head || !head.next) return head;
    let prev = null;
    let tmp;
    while(head) {
        tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }
    return prev;
};

//[1,2,3,4,5]
const input = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
const result = reverseList(input);
console.log(result);