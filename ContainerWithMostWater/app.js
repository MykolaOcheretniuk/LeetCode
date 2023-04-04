// https://leetcode.com/problems/container-with-most-water

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let maxAmountOfWater = 0;
let leftIndex = 0;
let rightIndex = height.length - 1;
while (leftIndex < rightIndex) {
  const leftHeight = height[leftIndex];
  const rightHeight = height[rightIndex];
  if (leftHeight < rightHeight) {
    const width = rightIndex - leftIndex;
    const amountOfWater = leftHeight * width;
    if (amountOfWater > maxAmountOfWater) {
      maxAmountOfWater = amountOfWater;
    }
    leftIndex++;
    continue;
  }
  const width = rightIndex - leftIndex;
  const amountOfWater = rightHeight * width;
  if (amountOfWater > maxAmountOfWater) {
    maxAmountOfWater = amountOfWater;
  }
  rightIndex--;
}
console.log(maxAmountOfWater);
