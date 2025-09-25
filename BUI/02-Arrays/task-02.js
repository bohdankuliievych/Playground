function reverseArray(array) {
  const res = [];
  while (array.length > 0) {
    res.push(array.pop());
  }
  return res;
}