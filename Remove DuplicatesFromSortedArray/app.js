//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return [];

    const res = [nums[0]]
    let i = 0, j = 1
    while (j <= nums.length - 1) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i + 1;
};
const case1 = [1, 1, 2];//Output [1,2]
const case2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] //Output [0,1,2,3,4]
console.log(removeDuplicates(case2));