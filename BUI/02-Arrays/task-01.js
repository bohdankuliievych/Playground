const f = (arraySize, value) => {
  const arr = [];
  while (arraySize > 0) {
    arr.push(value);
    arraySize--;
  }
  return arr;
};