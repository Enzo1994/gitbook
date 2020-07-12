var arr = [6, 4, 9, 4, 45, 6, 6, 7, 8, 4, 5, 56];
var str = "abc  def  hij       klm";
// 相向遍历：
for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
  console.log(arr[i], arr[j]);
}

// 前后脚遍历：
/*for (let i = 0; i < arr.length - 1; ++i) {
  for (let j = i + 1; j < arr.length; ++j) {
    // 只遍历i后面的内容
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr[i], arr[j]);
  }
}
console.log(arr);
*/

console.log(str.split(/\s+/));

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));
// fib(2);
