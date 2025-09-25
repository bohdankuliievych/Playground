
function mergeArrays(a, b) {
  if (a.length > b.length) {
    [a, b] = [b, a];
  }
  const res = [];
  let indexA = 0;
  let indexB = 0;
  while (indexA < a.length) {
    if (a[indexA] === b[indexB]) {
      res.push(a[indexA]);
      indexA++;
      indexB++;
    }
    if (a[indexA] < b[indexB]) {
      res.push(a[indexA]);
      indexA++;
    }
    if (a[indexA] > b[indexB]) {
      res.push(b[indexB]);
      indexB++;
    }
  }
  b.slice(indexB).forEach((el) => {
    res.push(el);
  });
  return res;
}