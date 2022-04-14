const findNextSquare = (perfectSquare) => {
  const root = Math.sqrt(perfectSquare);
  return typeof root == "number" && root % 1 === 0 ? (root + 1) ** 2 : -1;
};
console.log(findNextSquare(114));
console.log(findNextSquare(121));
console.log(findNextSquare(625));
