//https://leetcode.com/problems/valid-anagram/

const s = "anagram", //true
  t = "nagaram";

const s1 = "rat", //false
  t1 = "car";

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  s = s.split("").sort().toString();
  t = t.split("").sort().toString();
  return t === s;
};

console.log(isAnagram(s, t));
