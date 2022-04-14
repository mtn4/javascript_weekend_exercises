const oneAndZeroBinary = (binaryNum) => {
  let intNum = 0;
  const reverseBinary = binaryNum.reverse();
  for (let i = 0; i < reverseBinary.length; i++) {
    if (reverseBinary[i] === 1) {
      intNum += 2 ** i;
    }
  }
  return intNum;
};

console.log(oneAndZeroBinary([0, 1, 0, 1]));
console.log(oneAndZeroBinary([1, 0, 0, 1]));
console.log(oneAndZeroBinary([1, 1, 1, 1]));
