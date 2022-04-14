function isIsogram(str) {
  return (
    str
      .toLowerCase()
      .split("")
      .filter((element, index, array) => {
        return array.indexOf(element) === index;
      }).length == str.length
  );
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
