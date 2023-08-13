//https://leetcode.com/problems/binary-tree-paths/

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

const root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5, null, null)),
  new TreeNode(3, null, null)
); // Output ["1->2->5","1->3"]
const nextArrow = "->";
function binaryTreePaths(root: TreeNode | null): string[] {
  let res: string[] = [];
  if (root === null) {
    return res;
  }
  const currentPath = `${root.val}`;
  if (root.left === null && root.right === null) {
    res.push(currentPath);
  }
  if (root.left !== null) {
    createPath(currentPath, root.left, res);
  }
  if (root.right !== null) {
    createPath(currentPath, root.right, res);
  }
  return res;
}
function createPath(path: string, root: TreeNode | null, result: string[]) {
  path += `${nextArrow}${root?.val}`;
  if (root === null) {
    return;
  }
  if (root.left === null && root.right === null) {
    result.push(path);
    return;
  }
  if (root.left !== null) {
    createPath(path, root.left, result);
  }
  if (root?.right !== null) {
    createPath(path, root?.right, result);
  }
}
console.log(binaryTreePaths(root));
