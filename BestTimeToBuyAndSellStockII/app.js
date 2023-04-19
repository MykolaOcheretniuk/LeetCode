const prices1 = [7, 1, 5, 3, 6, 4]; // profit = 7
const prices2 = [1, 2, 3, 4, 5]; //profit = 4
const prices3 = [7, 6, 4, 3, 1]; //profit = 0

var maxProfit = function (prices) {
  let maxProfitValue = 0;
  let left = 0;
  let right = 0;
  while (right < prices.length) {
    let profit = prices[right] - prices[left];
    if (profit > 0) {
      maxProfitValue += profit;
      left++;
    } else {
      left = right;
    }
    right++;
  }
  return maxProfitValue;
};

console.log(maxProfit(prices3));
