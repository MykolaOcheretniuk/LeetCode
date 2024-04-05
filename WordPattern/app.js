//https://leetcode.com/problems/word-pattern
const pattern = "abba";
const s = "dog cat cat dog"; // true
const pattern1 = "abba";
const s1 = "dog cat cat fish"; // false
const pattern2 = "aaaa";
const s2 = "dog cat cat dog"; // false
const pattern3 = "abba";
const s3 = "dog dog dog dog"; // false
const pattern4 = "abc";
const s4 = "b c a"; //false
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (words.length !== pattern.length) return false;
  const wordsMap = new Map();
  const patternMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const word = wordsMap.get(pattern[i]);
    const key = patternMap.get(words[i]);
    if (word === undefined && key === undefined) {
      wordsMap.set(pattern[i], words[i]);
      patternMap.set(words[i], pattern[i]);
      continue;
    }
    if (key !== pattern[i] || word !== words[i]) {
      return false;
    }
  }
  return true;
};
console.log(wordPattern(pattern4, s4));
