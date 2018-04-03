function isEqual(x, y) {
  return x === y ? `PASS: ${x} is equal to ${y}` : `FAIL: ${x} is not equal to ${y}`;
}

console.log(isEqual(1, 1))
