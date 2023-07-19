// https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=dynamic-programming
const coins = [1, 2, 5],
  amount = 11; // Output: 3
const coins2 = [2],
  amount2 = 3; // Output: -1

const coins3 = [1],
  amount3 = 0; //Output: 0

const coins4 = [411, 377, 14, 456, 434];
const amount4 = 6892;

const coins5 = [3, 4, 5];
const amount5 = 7;

const coins6 = [2, 5];
const amount6 = 11;

const coins7 = [2];
const amount7 = 4;

const coins8 = [1, 2];
const amount8 = 2; // 1

const coins9 = [2, 5, 10, 1];
const amount9 = 27; //4


// ToDo: improve speed 
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }
  const dp = new Map();
  for (let i = 1; i <= amount; i++) {
    let min;
    for (let j = 0; j < coins.length; j++) {
      const dif = i - coins[j];
      if (dif === 0) {
        dp.set(i, 1);
        break;
      }
      if (dif > 0) {
        const gpDif = dp.get(dif);
        if (gpDif) {
          if (!min) {
            min = 1 + gpDif;
          }
          min = Math.min(min, 1 + gpDif);
          dp.set(i, min);
        }
      }
    }
  }
  const result = dp.get(amount);
  if (!result) {
    return -1;
  }

  return result;
};
console.log(coinChange(coins8, amount8));

// Брутфорс хуета
/*
var coinChange = function (coins, amount) {
  const coinsForValue = new Map();
  const minCoin = Math.min(...coins);
  coins.forEach((coin) => {
    coinsForValue.set(coin, 1);
  });
  for (let i = 1; i <= amount; i += minCoin) {
    const exists = coinsForValue.has(i);
    if (exists) {
      continue;
    }
    coinsForValue.set(i, countMin(coinsForValue, i, minCoin));
  }
  const result = coinsForValue.get(amount);
  if (result === Number.MAX_VALUE) {
    return -1;
  }
  if (!result) {
    return 0;
  }
  return result;
};
var countMin = function (map, value, minCoin) {
  let i = minCoin;
  let j = value - minCoin;
  let min = Number.MAX_VALUE;
  while (true) {
    if (i > j) {
      return min;
    }
    if (!map.has(i)) {
      (i += minCoin), (j -= minCoin);
      continue;
    }
    min = Math.min(min, map.get(i) + map.get(j));
    if (min === 2) {
      return min;
    }
    (i += minCoin), (j -= minCoin);
  }
};
*/
