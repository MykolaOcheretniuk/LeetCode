// https://leetcode.com/problems/single-number/description

const numbers = [2, 2, 1]; // Output: 1
const numbers2 = [4, 1, 2, 1, 2]; // Output: 4
const numbers3 = [1]; // Output: 1

var singleNumber = function (numbers) {
  const values = new Set();
  const result = new Set();
  for (const number of numbers) {
    if (values.has(number)) {
      result.delete(number);
    } else {
      result.add(number);
      values.add(number);
    }
  }
  return result.values().next().value;
};

console.log(singleNumber(numbers));
