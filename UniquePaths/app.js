//https://leetcode.com/problems/unique-paths/description/

//Input: m = 3, n = 7; Output: 28
//Input: m = 3, n = 2; Output: 3

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const cache = new Map();
    return count(m - 1, n - 1,cache);
};

/**
 * @param {Map<string,number>} cache
 */
function count(i,j,cache){
    if(i===-1 || j===-1) return 0;
    if(i===0 && j===0) return 1;

    const key = `${i},${j}`;
    if (cache.has(key)) return cache.get(key);

    const result = count(i - 1, j, cache) + count(i, j - 1, cache);
    cache.set(key, result);
    return result;
}
console.log(uniquePaths(3,2));