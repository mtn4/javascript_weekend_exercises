const toWeirdCase = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, index) => {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
};

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
