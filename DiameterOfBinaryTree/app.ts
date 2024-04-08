//https://leetcode.com/problems/diameter-of-binary-tree/submissions/1226538084/
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
const node = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)),
  new TreeNode(3, null, null)
); // result = 3
const node1 = new TreeNode();
function diameterOfBinaryTree(root: TreeNode | null): number {
  let longestTotal = 0;
  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    const right = dfs(node.right);
    const left = dfs(node.left);
    const max = Math.max(right, left) + 1;
    longestTotal = max;

    return max;
  }
  dfs(root);
  return longestTotal;
}

console.log(diameterOfBinaryTree(node));
