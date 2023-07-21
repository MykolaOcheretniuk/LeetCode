class TreeNode {
  val;
  left;
  right;
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const treeA = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);
const treeB = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);

const treeA1 = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(1, null, null)
);
const treeB1 = new TreeNode(
  1,
  new TreeNode(1, null, null),
  new TreeNode(2, null, null)
);

function isSameTree(p, q) {
  let isSame = true;
  if (!p || !q) {
    return p?.val === q?.val;
  }
  const valEqual = p.val === q.val;
  if (!valEqual) {
    return false;
  }
  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);
  if (left !== right) {
    isSame = false;
    return isSame;
  }
  isSame = left;
  return isSame;
}
console.log(isSameTree(treeA, treeB));
