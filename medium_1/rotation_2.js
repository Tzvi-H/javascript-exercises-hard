/*
Problem
  - Given a number x, and a count y 
    return the number with the last y digits rotated
  - to rotate means to move the first digit(char) to the back
  input  => number, number of digits to rotate
  output => rotated number
Examples
  -  12345, 1 => 12345
     12345, 2 => 12354
     12345, 3 => 12453
     12345, 4 => 14532
     12345, 5 => 24531
Data Structure
  - string of coerced number
Algorithm
  - given a number 'num' and a count 'count'
  - convert num to string
  - split into 2 parts
    1. from the front until the last count digits => num.slice(0, -count)
    2. the last count digits                      => num.slice(-count)
  - rotate the back
  - add the front and the back
  - return the previous result coerced into a number
*/

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

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);


// 12345, 1 => 12345
// 12345, 2 => 12354
// 12345, 3 => 12453
// 12345, 4 => 14532
// 12345, 5 => 24531