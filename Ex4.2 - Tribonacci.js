function tribonacci(sig, n) {
  let trib = sig;
  for (i = 3; i < n; i++) {
    trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
  }
  return trib.slice(0, n);
}
console.log(tribonacci([1, 1, 1], 8));
