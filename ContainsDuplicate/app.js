//https://leetcode.com/problems/contains-duplicate/description/

const nums = [1, 2, 3, 1]; //true
const nums2 = [1, 2, 3, 4]; //false
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]; //true
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate(nums3));
