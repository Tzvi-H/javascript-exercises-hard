/*
Input  => number
Output => number

Problem
  - Given a number
  - from n = the number of digits until n = 2 (inclusive)
    - number = rotate the last n digits
Example
  -     12345
    n=5 23451 
    n=4 24513
    n=3 24135
    n=2 24153
Data Structure     
Algorithm
  - given a number
  - numOfdigits is the length of (number coerced to a string)
  - from numOfDigits..2 inclusive
    - reassign number to rotateRightmostDigits(num, numOfDigits)
  - return num
*/

function maxRotation(number) {
  let numberLength = String(number).length;
  for (count = numberLength; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count)
  }
  return number;
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

function rotateRightmostDigits(num, count) {
  let numString = String(num);
  let frontDigits = numString.slice(0, -count);
  let backDigits = numString.slice(-count);
  let rotatedString = frontDigits + rotateString(backDigits);

  return parseInt(rotatedString, 10);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845