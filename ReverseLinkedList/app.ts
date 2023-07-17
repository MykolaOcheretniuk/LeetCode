// https://leetcode.com/problems/reverse-linked-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
); //Output: [5,4,3,2,1]
function reverseList(head: ListNode | null): ListNode | null {
  let result: ListNode | null = null;
  let next: ListNode | null = null;
  while (head) {
    next = head.next;
    head.next = result;
    result = head;
    head = next;
  }
  return result;
}
console.log(reverseList(head));
