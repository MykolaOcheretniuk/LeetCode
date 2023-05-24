//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


const prices = [7, 1, 5, 3, 6, 4];
const zeroProfit = [7, 6, 4, 3, 1];
const a = [2, 1, 4];
var maxProfit = function (prices) {
  let profit = 0;
  let i = 0;
  let j = 0;
  while (j < prices.length) {
    const interimProfit = prices[j] - prices[i];
    if (interimProfit >= 0) {
      if (interimProfit > profit) {
        profit = interimProfit;
      }
      j++;
    } else {
      i = j;
    }
  }
  return profit;
};

console.log(maxProfit(zeroProfit));
