//https://leetcode.com/problems/combination-sum-iv/solutions/4020886/javascript-memoization-dp-recursion-clean-solution/
const nums = [1, 2, 3],
  target = 4; // Output: 7
const nums2 = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25,
  ],
  target2 = 10; //Expected 9
const nums3 = [1, 2, 3],
  target3 = 32;
const nums4 = [3, 1, 2, 4]; // 8

const nums5 = [4, 2, 1];
const target5 = 32; //
var combinationSum4 = function (nums, target, cache = {}) {
  const cacheValue = cache[target];
  if (cacheValue) {
    return cacheValue;
  }
  if (target === 0) {
    return 1;
  }
  if (target < 0) {
    return 0;
  }
  let count = 0;
  for (let num of nums) {
    let newTarget = target - num;
    count += combinationSum4(nums, newTarget, cache);
  }
  cache[target] = count;
  return count;
};

// Add values until reach target + cache
const combinationSum4V2 = function (nums, target) {
  const cache = new Map();
  const result = countCombos(nums, target, 0, cache);
  return result;
};
const countCombos = (nums, target, current, cache = new Map()) => {
  const key = [current, target];
  if (cache.has(key)) {
    return cache.get(key);
  }
  let comboCount = 0;
  nums.forEach((num) => {
    let temp = current + num;
    if (temp > target) {
      return;
    }
    if (temp === target) {
      comboCount++;
      return;
    }
    comboCount += countCombos(nums, target, temp, cache);
  });
  cache.set(key, comboCount);
  if (cache.size > 1000) {
    cache.clear();
  }
  return comboCount;
};
//nihya ne ponimay che tyt proishodit
const combinationSum4V3 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (i >= num) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
};
console.log(combinationSum4V3(nums, target));
