const countingDuplicates = (str) => {
  var lowercaseStr = str.toLowerCase();
  var obj = {};
  var counter = 0;
  for (var i = 0; i < lowercaseStr.length; i++) {
    if (!obj[lowercaseStr[i]]) {
      obj[lowercaseStr[i]] = 1;
    } else if (obj[lowercaseStr[i]] < 2) {
      obj[lowercaseStr[i]] += 1;
      counter++;
    }
  }
  return counter;
};

console.log(countingDuplicates("abcde"));
console.log(countingDuplicates("aabbcde"));
console.log(countingDuplicates("aabBcde"));
console.log(countingDuplicates("indivisibility"));
console.log(countingDuplicates("Indivisibilities"));
console.log(countingDuplicates("aA11"));
console.log(countingDuplicates("ABBA"));
