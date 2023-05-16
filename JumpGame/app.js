const nums = [2, 3, 1, 1, 4];
const invalid = [3, 2, 1, 0, 4];
// https://leetcode.com/problems/jump-game/description/

var canJump = function (nums) {
  let maxJump = nums[0];
  if (nums.length === 1) {
    return true;
  }
  if (maxJump === 0) {
    return false;
  }
  return jump(maxJump, nums);
};

var jump = function (startIndex, nums) {
  for (let i = startIndex; i > 0; i--) {
    if (startIndex >= nums.length - 1) {
      return true;
    }
    if (i === 0) {
      return false;
    }
    if (nums[i] === 0) {
      let contains = false;
      let newMax = 0;
      for (let j = 0; j <= i; j++) {
        if (nums[j] > i - j) {
          contains = true;
          newMax = nums[j] + j;
          break;
        }
      }
      if (!contains) {
        return false;
      }
      return jump(newMax, nums);
    }
    return jump(nums[i] + i, nums);
  }
};
console.log(canJump(nums));
