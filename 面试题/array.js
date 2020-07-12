var arr = [1, [2, 3, 4, [5, 6, 7]], 8, 9, 0];
// var obj = { a: 3, b: 4 };
console.log(arr.concat(["q,", "q,"]));
// console.log(...arr);
// console.log({ ...obj });

let res = arr.slice(0);
while (res.some((item) => Array.isArray(item))) {
  res = [].concat(...res);
}
console.log(res);
