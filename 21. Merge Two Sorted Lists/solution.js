/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made 
by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

https://leetcode.com/problems/merge-two-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let newList = new ListNode(0, null);
    const newListStart = newList;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            newList.next = list1;
            list1 = list1.next;
        } else {
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }
    newList.next = list1 ? list1 : list2;
    return newListStart.next;
};

const input1 = new ListNode(1, new ListNode(2, new ListNode(4, null))); //[1, 2, 4];
const input2 = new ListNode(1, new ListNode(3, new ListNode(4, null))); //[1, 3, 4];
const result = mergeTwoLists(input1, input2);
console.log(result);