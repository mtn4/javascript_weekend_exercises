const summation = (num) => {
  return Array.from(new Array(num), (value, index) => index + 1).reduce(
    (prevNum, currNum) => prevNum + currNum
  );
};
console.log(summation(9));
