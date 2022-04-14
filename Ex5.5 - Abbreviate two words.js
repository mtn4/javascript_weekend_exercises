const abbreviateTwoWords = (twoWords) => {
  const wordsArray = twoWords.split(" ");
  return wordsArray[0][0].toUpperCase() + "." + wordsArray[1][0].toUpperCase();
};

console.log(abbreviateTwoWords("sam harris"));
console.log(abbreviateTwoWords("patrick feeney"));
