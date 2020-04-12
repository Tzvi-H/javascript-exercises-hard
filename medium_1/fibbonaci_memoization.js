function fibonacci(n) {
  let fibs = {
    1: 1,
    2: 1
  };
  return (function foo(n) {
    return fibs[n] || (fibs[n] = foo(n-1) + foo(n-2));
  })(n);
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
