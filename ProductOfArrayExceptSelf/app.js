//https://leetcode.com/problems/product-of-array-except-self/

const nums = [1, 2, 3, 4]; //Output: [24,12,8,6]
const nums1 = [-1, 1, 0, -3, 3]; //Output: [0,0,9,0,0]

//fast
var productExceptSelf = function (nums) {
  const result = [];
  const length = nums.length;
  const left = new Array(length);
  left[0] = 1;
  const right = new Array(length);
  right[length - 1] = 1;
  for (let i = 1; i < length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  for (let i = length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result.push(left[i] * right[i]);
  }
  return result;
};

//slow
var productExceptSelfSlow = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let multiply = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      multiply = multiply * nums[j];
    }
    result.push(multiply);
  }
  return result;
};

console.log(productExceptSelf(nums1));
