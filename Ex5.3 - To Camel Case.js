const toCamelCase = (str) => {
  const wordsArr = str.split(/[-_]/);
  for (let i = 1; i < wordsArr.length; i += 1) {
    wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
  }
  return wordsArr.join("");
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
