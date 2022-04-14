const organizeStrings = (str1, str2) => {
  let longestString = [],
    filteredStr = (str1 + str2).split("").filter((element, index, array) => {
      return array.indexOf(element) === index;
    });
  for (let i = 97; i < 124; i++) {
    if (filteredStr.includes(String.fromCharCode(i))) {
      longestString.push(String.fromCharCode(i));
    }
  }
  return longestString.join("");
};
console.log(organizeStrings("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(
  organizeStrings("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
);
