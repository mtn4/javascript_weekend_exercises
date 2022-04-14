const maskify = (password) => {
  return password.length < 4
    ? password
    : "#".repeat(password.length - 4) + password.substring(password.length - 4);
};

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));
