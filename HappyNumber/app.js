//https://leetcode.com/problems/happy-number/
const n = 19; //true
const n2 = 2;
var isHappy = function (n) {
  if (n === 1) {
    return true;
  }
  if (n === 0) {
    return false;
  }
  const results = new Set();
  while (n !== 1) {
    const newNumber = processNumber(n);
    if (results.has(newNumber)) {
      return false;
    } else {
      n = newNumber;
      results.add(newNumber);
    }
  }
  return true;
};

const processNumber = (number) => {
  var digits = [];
  while (number != 0) {
    digits.push(number % 10);
    number = Math.trunc(number / 10);
  }
  let result = 0;
  digits.forEach((digit) => {
    result += Math.pow(digit, 2);
  });
  return result;
};
console.log(isHappy(n2));
