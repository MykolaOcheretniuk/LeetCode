//https://leetcode.com/problems/climbing-stairs/
const n = 2; //Output: 2
const n2 = 3; //Output: 3
var climbStairs = function (n) {
  let result = 1;
  let prev = result;
  let current = 0;
  while (n > 1) {
    current = result + prev;
    prev = result;
    result = current;
    n--;
  }
  return result;
};

// ToDo: memorization func
var climbStairsRecursive = function (n) {
  const cache = new Map();
  return climb(0, n, 0, cache);
};
const climb = function (start, end, counter, cache) {
  const cacheCount = cache.get(start);
  if (cacheCount) {
    return cacheCount;
  }
  if (start === end) {
    counter++;
    return counter;
  }
  if (start > end) {
    return counter;
  }
  const count =
    climb(start + 1, end, counter, cache) +
    climb(start + 2, end, counter, cache);
  cache.set(start, count);
  return count;
};

console.log(climbStairsRecursive(44));
