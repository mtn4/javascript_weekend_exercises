//With sort
const sumOfLowestNumbersSort = (numArray) => {
  const sortedArray = numArray.sort((a, b) => a - b);
  return sortedArray[0] + sortedArray[1];
};
//Without using sort
const sumOfLowestNumbers = (numArray) => {
  let lowest = numArray[0],
    secondLowest = numArray[1];
  if (numArray[0] > numArray[1]) {
    lowest = numArray[1];
    secondLowest = numArray[0];
  }
  for (let i = 2; i < numArray.length; i++) {
    if (numArray[i] < lowest) {
      secondLowest = lowest;
      lowest = numArray[i];
    } else if (numArray[i] < secondLowest) {
      secondLowest = numArray[i];
    }
  }
  return lowest + secondLowest;
};

console.log(sumOfLowestNumbers([19, 5, 42, 2, 77]));
console.log(sumOfLowestNumbers([10, 343445353, 3453445, 3453545353453]));
