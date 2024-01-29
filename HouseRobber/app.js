//https://leetcode.com/problems/house-robber/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 2, 3, 1]; // result: 4
const nums1 = []; //result: 0
const nums2 = [2, 7, 9, 3, 1]; //result: 12
var rob = function (nums) {
  let dp = new Array(nums.length + 1).fill(0);
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }
  return dp[nums.length];
};
console.log(rob(nums2));
