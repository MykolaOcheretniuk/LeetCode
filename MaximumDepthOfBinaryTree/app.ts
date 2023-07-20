//https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
); // Output: 3
const root2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, null), null),
  new TreeNode(3, null, new TreeNode(5, null, null))
); // output: 3

// DFS
function maxDepth(root: TreeNode | null): number {
  let max = 0;
  if (root === null) {
    return max;
  }
  max += 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  return max;
}

//BFS
function maxDepthBFS(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let queue = [[root]];
  let max = 1;
  while (true) {
    const currentLevel = queue.pop();
    if (!currentLevel) {
      break;
    }
    const level: TreeNode[] = [];
    for (let i = 0; i < currentLevel.length; i++) {
      const left = currentLevel[i].left;
      const right = currentLevel[i].right;
      if (left) {
        level.push(left);
      }
      if (right) {
        level.push(right);
      }
    }
    if (level.length !== 0) {
      max++;
      queue.push(level);
    }
  }
  return max;
}
console.log(maxDepthBFS(root));
