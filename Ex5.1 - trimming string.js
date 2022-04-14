const trimmingString = (str) => {
  if (str.length <= 2) return str;
  return str.slice(1, -1);
};
console.log(trimmingString("a"));
console.log(trimmingString("adasds"));
