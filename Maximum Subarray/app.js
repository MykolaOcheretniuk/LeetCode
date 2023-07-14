//https://leetcode.com/problems/maximum-subarray/

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // output 6
const nums2 = [5, 4, -1, 7, 8]; // output 23

var maxSubArray = function (nums) {
  let total = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const current = max * nums[i];
    if (current < nums[i]) {
      max = nums[i];
      total = Math.max(total, max);
      continue;
    }
    max = current;
    total = Math.max(total, max);
  }
  return total;
};
console.log(maxSubArray(nums2));
