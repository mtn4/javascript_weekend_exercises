// With sort
const findUniqSort = (numArray) => {
  numArray.sort((a, b) => {
    return a - b;
  });
  return numArray[0] === numArray[1]
    ? numArray[numArray.length - 1]
    : numArray[0];
};

console.log(findUniqSort([1, 1, 1, 2, 1, 1]) === 2);
console.log(findUniqSort([0, 0, 0.55, 0, 0]) === 0.55);

const findUniq = (numArray) => {
  if (numArray[0] !== numArray[1]) {
    return numArray[0] === numArray[2] ? numArray[1] : numArray[0];
  }
  let i = 2;
  while (true) {
    if (numArray[i] !== numArray[0]) {
      return numArray[i];
    }
    i++;
  }
};
console.log(findUniq([2, 1, 1]));
console.log(findUniq([1, 1, 1, 1, 1, 2]));
console.log(findUniq([0, 0, 0, 0.55, 0]));
