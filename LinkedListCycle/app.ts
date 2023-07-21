class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
  }
}

function hasCycle(head: ListNode | null): boolean {
  const nodesSet = new Set();
  while (head) {
    if (nodesSet.has(head)) {
      return true;
    }
    nodesSet.add(head);
    head = head.next;
  }
  return false;
}
function hasCyclePointers(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  while (true) {
    slow = slow?.next as ListNode | null;
    if (slow === fast) {
      return true;
    }
    fast = fast?.next?.next as ListNode | null;
    if (fast === null) {
      return false;
    }
  }
}
