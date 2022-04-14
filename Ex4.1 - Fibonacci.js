const fibonacci = (start, num) => {
  let a = 1,
    b = 0,
    temp;

  while ((num >= 1 && start === 1) || (num >= 2 && start === 0)) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
};
