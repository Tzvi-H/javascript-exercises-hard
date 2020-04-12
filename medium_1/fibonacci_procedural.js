function fibonacci(max) {
  let fib1 = 1;
  let fib2 = 1;

  for (let i = 3; i <= max; i += 1) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }

  return fib2;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050