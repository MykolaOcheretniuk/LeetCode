// https://leetcode.com/problems/maximum-product-subarray/
const nums = [2, 3, -2, 4]; // Output: 6
const nums2 = [-2, 0, -1]; // Output: 0
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let result = max;
  for (let i = 1; i < nums.length; i++) {
    const tempMax = Math.max(min * nums[i], max * nums[i], nums[i]);
    min = Math.min(min * nums[i], max * nums[i], nums[i]);
    max = tempMax;
    result = Math.max(result, max);
  }
  return result;
};
console.log(maxProduct(nums7));
