// Write a function that takes one argument, a positive integer, and returns the sum of its digits. 
// Do this using list processing techniques.

// Examples:

// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

/* PEDAC

  - convert input into string
  - convert string into array
  - map array into array of numbers
  - reduce array of numbers into single SUM number

*/

function sum(number) {
  return number.toString()
               .split('')
               .map(Number)
               .reduce((sum, num) => sum + num);
}

console.log(sum(023));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
