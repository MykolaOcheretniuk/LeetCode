//https://leetcode.com/problems/two-sum/description/
const array1 = [2, 7, 11, 15];
const array2 = [3, 3];
const array3 = [3, 2, 4];
const array4 = [3, 4, 9, 6, 4];

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      const dif = target - nums[i];
      map.set(dif, i);
    } else {
      const index = map.get(nums[i]);
      return [index, i];
    }
  }
};

console.log(twoSum(array1, 9));
