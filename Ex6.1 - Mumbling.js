const accum = (sentence) => {
  const chars = sentence.toUpperCase().split("");
  return chars
    .map((char, index) => {
      return char + char.toLowerCase().repeat(index);
    })
    .join("-");
};

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
